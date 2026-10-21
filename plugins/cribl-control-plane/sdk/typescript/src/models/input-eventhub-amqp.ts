import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authSchema, type Auth } from "./auth.js";
import { checkpointingSchema, type Checkpointing } from "./checkpointing.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputEventhubAmqp = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "eventhub_amqp" */
  type?: "eventhub_amqp";
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
  /** The name of the Event Hub to consume from */
  eventHubName?: string;
  /** The consumer group this instance belongs to. Default is '$Default'. */
  consumerGroup: string;
  /** Authentication settings for the Event Hubs AMQP connection. */
  auth?: Auth;
  /** Azure Blob Storage settings used to persist Event Hubs checkpoints. */
  checkpointing: Checkpointing;
  /** Start reading from earliest available data; relevant only during initial subscription */
  fromBeginning?: boolean;
  /** Maximum number of events in each batch delivered to the consumer */
  maxBatchSize?: number;
  /** Maximum time to wait for a batch of events before delivering a partial batch */
  maxWaitTimeInSeconds?: number;
  /** Number of events to prefetch from the service for processing */
  prefetchCount?: number;
  /** Maximum number of retries per operation */
  maxRetries?: number;
  /** Initial delay before the first retry, in milliseconds */
  initialBackoff?: number;
  /** Maximum delay between retries, in milliseconds */
  maxBackoff?: number;
  /** Maximum time to wait for a request to complete */
  timeoutInMs?: number;
  /** Initial delay before the first reconnection attempt, in milliseconds */
  connectionInitialBackoff?: number;
  /** Maximum delay between reconnection attempts, in milliseconds */
  connectionMaxBackoff?: number;
  /** Maximum time to wait for a connection to complete */
  connectionTimeoutInMs?: number;
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
};

export const inputEventhubAmqpSchema: Schema<InputEventhubAmqp> = s.object<InputEventhubAmqp>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("eventhub_amqp"), "eventhub_amqp"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  eventHubName: s.optional(s.string()),
  consumerGroup: s.string(),
  auth: s.optional(s.lazy(() => authSchema)),
  checkpointing: checkpointingSchema,
  fromBeginning: s.optional(s.boolean()),
  maxBatchSize: s.optional(s.int()),
  maxWaitTimeInSeconds: s.optional(s.int()),
  prefetchCount: s.optional(s.int()),
  maxRetries: s.optional(s.int()),
  initialBackoff: s.optional(s.int()),
  maxBackoff: s.optional(s.int()),
  timeoutInMs: s.optional(s.int()),
  connectionInitialBackoff: s.optional(s.int()),
  connectionMaxBackoff: s.optional(s.int()),
  connectionTimeoutInMs: s.optional(s.int()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
