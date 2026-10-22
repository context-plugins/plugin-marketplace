import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acknowledgmentsSchema, type Acknowledgments } from "./acknowledgments.js";
import { authentication19Schema, type Authentication19 } from "./authentication19.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import { recordDataFormatSchema, type RecordDataFormat } from "./record-data-format.js";
import { tlsSettingsClientSideSchema, type TlsSettingsClientSide } from "./tls-settings-client-side.js";

export type OutputAzureEventhub = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "azure_eventhub" */
  type?: "azure_eventhub";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /** Fields to automatically add to events, such as cribl_pipe. Supports wildcards. */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * List of Event Hubs Kafka brokers to connect to, eg. yourdomain.servicebus.windows.net:9093. The
   * hostname can be found in the host portion of the primary or secondary connection string in
   * Shared Access Policies.
   */
  brokers: string[];
  /**
   * The name of the Event Hub (Kafka Topic) to publish events. Can be overwritten using field
   * __topicOut.
   */
  topic: string;
  /** Control the number of required acknowledgments */
  ack?: Acknowledgments;
  /** Format to use to serialize events before writing to the Event Hubs Kafka brokers */
  format?: RecordDataFormat;
  /**
   * Maximum size of each record batch before compression. Setting should be < message.max.bytes
   * settings in Event Hubs brokers.
   */
  maxRecordSizeKb?: number;
  /** Maximum number of events in a batch before forcing a flush */
  flushEventCount?: number;
  /**
   * Maximum time between requests. Small values could cause the payload size to be smaller than the
   * configured Max record size.
   */
  flushPeriodSec?: number;
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
  sasl?: Authentication19;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Use FIFO (first in, first out) processing. Disable to forward new events to receivers before
   * queue is flushed.
   */
  pqStrictOrdering?: boolean;
  /**
   * Throttling rate (in events per second) to impose while writing to Destinations from PQ.
   * Defaults to 0, which disables throttling.
   */
  pqRatePerSec?: number;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In
   * Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the
   * Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: Mode76;
  /**
   * Maximum number of events to hold in memory before writing the events to disk. Deprecated and
   * only supported in workers < v4.17.0. Use pqMaxBufferSizeBytes instead.
   */
  pqMaxBufferSize?: number;
  /** How long (in seconds) to wait for backpressure to resolve before engaging the queue */
  pqMaxBackpressureSec?: number;
  /**
   * The maximum size to store in each queue file before closing and optionally compressing (KB, MB,
   * etc.)
   */
  pqMaxFileSize?: string;
  /**
   * The maximum disk space that the queue can consume (as an average per Worker Process) before
   * queueing stops. Enter a numeral with units of KB, MB, etc.
   */
  pqMaxSize?: string;
  /**
   * The location for the persistent queue files. To this field's value, the system will append:
   * /<worker-id>/<output-id>.
   */
  pqPath?: string;
  /** Codec to use to compress the persisted data */
  pqCompress?: Compression;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk).
   * 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data,
   * while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: QueueFullBehavior62;
  /**
   * The maximum size to hold in memory before writing events to disk. Enter a numeral with units of
   * KB, MB, etc. The minimum value is 64KB and the maximum value is 10MB.
   */
  pqMaxBufferSizeBytes?: string;
  /** Persistent queue controls. */
  pqControls?: Record<string, unknown>;
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
   * Binds 'topic' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'topic' at runtime.
   */
  templateTopic?: string;
  /**
   * Binds 'format' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'format' at runtime.
   */
  templateFormat?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputAzureEventhubSchema: Schema<OutputAzureEventhub> = s.object<OutputAzureEventhub>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("azure_eventhub"), "azure_eventhub"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  brokers: s.array(s.string()),
  topic: s.string(),
  ack: s.optional(s.lazy(() => acknowledgmentsSchema)),
  format: s.optional(s.lazy(() => recordDataFormatSchema)),
  maxRecordSizeKb: s.optional(s.float64()),
  flushEventCount: s.optional(s.float64()),
  flushPeriodSec: s.optional(s.float64()),
  connectionTimeout: s.optional(s.float64()),
  requestTimeout: s.optional(s.float64()),
  maxRetries: s.optional(s.float64()),
  maxBackOff: s.optional(s.float64()),
  initialBackoff: s.optional(s.float64()),
  backoffRate: s.optional(s.float64()),
  authenticationTimeout: s.optional(s.float64()),
  reauthenticationThreshold: s.optional(s.float64()),
  sasl: s.optional(s.lazy(() => authentication19Schema)),
  tls: s.optional(s.lazy(() => tlsSettingsClientSideSchema)),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  description: s.optional(s.string()),
  pqStrictOrdering: s.optional(s.boolean()),
  pqRatePerSec: s.optional(s.float64()),
  pqMode: s.optional(s.lazy(() => mode76Schema)),
  pqMaxBufferSize: s.optional(s.float64()),
  pqMaxBackpressureSec: s.optional(s.float64()),
  pqMaxFileSize: s.optional(s.string()),
  pqMaxSize: s.optional(s.string()),
  pqPath: s.optional(s.string()),
  pqCompress: s.optional(s.lazy(() => compressionSchema)),
  pqOnBackpressure: s.optional(s.lazy(() => queueFullBehavior62Schema)),
  pqMaxBufferSizeBytes: s.optional(s.string()),
  pqControls: s.optional(s.record(s.string(), s.unknown())),
  templateStreamtags: s.optional(s.string()),
  templateBrokers: s.optional(s.string()),
  templateTopic: s.optional(s.string()),
  templateFormat: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  _keysMap: {
    maxRecordSizeKb: "maxRecordSizeKB",
    templateStreamtags: "__template_streamtags",
    templateBrokers: "__template_brokers",
    templateTopic: "__template_topic",
    templateFormat: "__template_format",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
