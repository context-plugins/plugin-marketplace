import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationSchema, type Authentication } from "./authentication.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  kafkaSchemaRegistryAuthenticationSchema,
  type KafkaSchemaRegistryAuthentication,
} from "./kafka-schema-registry-authentication.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { tlsSettingsClientSide33Schema, type TlsSettingsClientSide33 } from "./tls-settings-client-side33.js";

export type InputKafka = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "kafka" */
  type?: "kafka";
  /** If true, the Source is disabled and will not collect data. */
  disabled?: boolean;
  /** Pipeline to process data from this Source before sending it through the Routes */
  pipeline?: string;
  /** Select whether to send data to Routes, or directly to Destinations. */
  sendToRoutes?: boolean;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /**
   * Use a disk queue to minimize data loss when connected services block. See [Cribl
   * Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud
   * Workers) and configuration options (on-prem and hybrid Workers).
   */
  pqEnabled?: boolean;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * Read-only metadata that records how the Source was created. Preserved on update when omitted
   * from the request body. Cannot be set on create.
   */
  criblSourceProvenance?: InputProvenance;
  /** Direct connections to Destinations, and optionally via a Pipeline or a Pack */
  connections?: ConnectionConfInputCollection[];
  /** Persistent queue settings for this Source. */
  pq?: PqType;
  /**
   * Enter each Kafka bootstrap server you want to use. Specify the hostname and port (such as
   * mykafkabroker:9092) or just the hostname (in which case \@{product} will assign port 9092).
   */
  brokers: string[];
  /**
   * Topic to subscribe to. Warning: To optimize performance, Cribl suggests subscribing each Kafka
   * Source to a single topic only.
   */
  topics: string[];
  /** The consumer group to which this instance belongs. Defaults to 'Cribl'. */
  groupId?: string;
  /**
   * Leave enabled if you want the Source, upon first subscribing to a topic, to read starting with
   * the earliest available message
   */
  fromBeginning?: boolean;
  /** Kafka Schema Registry Authentication */
  kafkaSchemaRegistry?: KafkaSchemaRegistryAuthentication;
  /** Maximum time to wait for a connection to complete successfully */
  connectionTimeout?: number;
  /** Maximum time to wait for Kafka to respond to a request */
  requestTimeout?: number;
  /**
   * If messages are failing, you can set the maximum number of retries as high as 100 to prevent
   * loss of data
   */
  maxRetries?: number;
  /**
   * The maximum wait time for a retry, in milliseconds. Default (and minimum) is 30,000 ms (30
   * seconds); maximum is 180,000 ms (180 seconds).
   */
  maxBackOff?: number;
  /**
   * Initial value used to calculate the retry, in milliseconds. Maximum is 600,000 ms (10 minutes).
   */
  initialBackoff?: number;
  /**
   * Set the backoff multiplier (2-20) to control the retry frequency for failed messages. For
   * faster retries, use a lower multiplier. For slower retries with more delay between attempts,
   * use a higher multiplier. The multiplier is used in an exponential backoff formula; see the
   * Kafka [documentation](https://kafka.js.org/docs/retry-detailed) for details.
   */
  backoffRate?: number;
  /** Maximum time to wait for Kafka to respond to an authentication request */
  authenticationTimeout?: number;
  /**
   * Specifies a time window during which \@{product} can reauthenticate if needed. Creates the
   * window measuring backward from the moment when credentials are set to expire.
   */
  reauthenticationThreshold?: number;
  /**
   * Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.
   */
  sasl?: Authentication;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide33;
  /**
   * Timeout used to detect client failures when using Kafka's group-management facilities. If the
   * client sends no heartbeats to the broker before the timeout expires, the broker will remove the
   * client from the group and initiate a rebalance. Value must be between the broker's configured
   * group.min.session.timeout.ms and group.max.session.timeout.ms. See [Kafka's
   * documentation](https://kafka.apache.org/documentation/#consumerconfigs_session.timeout.ms) for
   * details.
   */
  sessionTimeout?: number;
  /**
   * Maximum allowed time for each worker to join the group after a rebalance begins. If the timeout
   * is exceeded, the coordinator broker will remove the worker from the group. See [Kafka's
   * documentation](https://kafka.apache.org/documentation/#connectconfigs_rebalance.timeout.ms) for
   * details.
   */
  rebalanceTimeout?: number;
  /**
   * Expected time between heartbeats to the consumer coordinator when using Kafka's
   * group-management facilities. Value must be lower than sessionTimeout and typically should not
   * exceed 1/3 of the sessionTimeout value. See [Kafka's
   * documentation](https://kafka.apache.org/documentation/#consumerconfigs_heartbeat.interval.ms)
   * for details.
   */
  heartbeatInterval?: number;
  /**
   * How often to commit offsets. If both this and Offset commit threshold are set, \@{product}
   * commits offsets when either condition is met. If both are empty, \@{product} commits offsets
   * after each batch.
   */
  autoCommitInterval?: number;
  /**
   * How many events are needed to trigger an offset commit. If both this and Offset commit interval
   * are set, \@{product} commits offsets when either condition is met. If both are empty,
   * \@{product} commits offsets after each batch.
   */
  autoCommitThreshold?: number;
  /**
   * Maximum amount of data that Kafka will return per partition, per fetch request. Must equal or
   * exceed the maximum message size (maxBytesPerPartition) that Kafka is configured to allow.
   * Otherwise, \@{product} can get stuck trying to retrieve messages. Defaults to 1048576 (1 MB).
   */
  maxBytesPerPartition?: number;
  /**
   * Maximum number of bytes that Kafka will return per fetch request. Defaults to 10485760 (10 MB).
   */
  maxBytes?: number;
  /** Maximum number of network errors before the consumer re-creates a socket */
  maxSocketErrors?: number;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Binds 'environment' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'environment' at runtime.
   */
  templateEnvironment?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'brokers' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'brokers' at runtime.
   */
  templateBrokers?: string;
  /**
   * Binds 'topics' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'topics' at runtime.
   */
  templateTopics?: string;
  /**
   * Binds 'groupId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'groupId' at runtime.
   */
  templateGroupId?: string;
};

export const inputKafkaSchema: Schema<InputKafka> = s.object<InputKafka>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("kafka"), "kafka"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  brokers: s.array(s.string()),
  topics: s.array(s.string()),
  groupId: s.optional(s.string()),
  fromBeginning: s.optional(s.boolean()),
  kafkaSchemaRegistry: s.optional(s.lazy(() => kafkaSchemaRegistryAuthenticationSchema)),
  connectionTimeout: s.optional(s.float64()),
  requestTimeout: s.optional(s.float64()),
  maxRetries: s.optional(s.float64()),
  maxBackOff: s.optional(s.float64()),
  initialBackoff: s.optional(s.float64()),
  backoffRate: s.optional(s.float64()),
  authenticationTimeout: s.optional(s.float64()),
  reauthenticationThreshold: s.optional(s.float64()),
  sasl: s.optional(s.lazy(() => authenticationSchema)),
  tls: s.optional(s.lazy(() => tlsSettingsClientSide33Schema)),
  sessionTimeout: s.optional(s.float64()),
  rebalanceTimeout: s.optional(s.float64()),
  heartbeatInterval: s.optional(s.float64()),
  autoCommitInterval: s.optional(s.float64()),
  autoCommitThreshold: s.optional(s.float64()),
  maxBytesPerPartition: s.optional(s.float64()),
  maxBytes: s.optional(s.float64()),
  maxSocketErrors: s.optional(s.float64()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateBrokers: s.optional(s.string()),
  templateTopics: s.optional(s.string()),
  templateGroupId: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateBrokers: "__template_brokers",
    templateTopics: "__template_topics",
    templateGroupId: "__template_groupId",
  },
});
