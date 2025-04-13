import { Kafka } from 'kafkajs';

const CLIENT_ID = process.env.KAFKA_CLIENT_ID ?? 'notifyhub-client';
const BROKER = process.env.KAFKA_BROKER ?? 'localhost:9092';
const GROUP_ID = process.env.KAFKA_GROUP_ID ?? 'notifyhub-group';

const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: [BROKER],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: GROUP_ID });

export {
  producer,
  consumer,
  kafka,
};
