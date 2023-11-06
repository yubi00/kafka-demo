// to run zookeeper container
// docker run -p 2181:2181 zookeeper

//to run kafka container

// docker run -p 9092:9092 \
// -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
// -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
// -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
// confluentinc/cp-kafka

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['<PRIVATE_IP>:9092'],
});

exports.kafka = kafka;
