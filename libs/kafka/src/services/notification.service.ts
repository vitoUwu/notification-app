import { producer } from '../lib/kafka.js';

export async function notify(data: any) {
  await producer.send({
    topic: 'notification',
    messages: [{ value: JSON.stringify(data) }],
  });
}
