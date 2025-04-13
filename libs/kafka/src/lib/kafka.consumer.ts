import { consumer } from './kafka.js';

async function consumeNotifications() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'notifications', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const notificationData = JSON.parse(message.value!.toString());
      console.log('Mensagem recebida do Kafka:', notificationData);
    },
  });
}

consumeNotifications().catch(console.error);
