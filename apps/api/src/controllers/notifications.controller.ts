import { sendNotificationSchema } from '../dtos/notification.dtos/send-notification.dto.js';
import { BadRequestError } from '../lib/errors/HttpError/BadRequestError.js';
import { withErrorHandler } from '../lib/withErrorHandler.js';
import { notify } from '../services/notification.service.js';

export const sendNotification = withErrorHandler(async (req, res) => {
  const { success, data, error } = sendNotificationSchema(req.body);

  if (!success) {
    throw new BadRequestError(error.message);
  }

  const { type, subject, content, to, from, template } = data;

  await notify({ type, subject, content, to, from, template });

  res.status(200).json({ message: 'Notification sent successfully' });
})
