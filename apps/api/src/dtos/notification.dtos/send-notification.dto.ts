import { z } from 'zod';

export const sendNotificationDto = z.object({
  type: z.string(),
  subject: z.string(),
  content: z.string(),
  to: z.string(),
  from: z.string(),
  template: z.string(),
});

export type SendNotificationDto = z.infer<typeof sendNotificationDto>;
export const sendNotificationSchema = sendNotificationDto.safeParse;