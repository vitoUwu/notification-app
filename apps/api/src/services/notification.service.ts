import { notify as kafkaNotify } from '@notification-app/kafka/services/notification.service';

export async function notify(payload: unknown) {
  await kafkaNotify(payload);
}
