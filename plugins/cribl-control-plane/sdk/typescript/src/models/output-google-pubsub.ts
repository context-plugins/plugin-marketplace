import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import {
  googleAuthenticationMethodSchema,
  type GoogleAuthenticationMethod,
} from "./google-authentication-method.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";

export type OutputGooglePubsub = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "google_pubsub" */
  type?: "google_pubsub";
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
  /** ID of the topic to send events to. */
  topicName: string;
  /** If enabled, create topic if it does not exist. */
  createTopic?: boolean;
  /**
   * If enabled, send events in the order they were added to the queue. For this to work correctly,
   * the process receiving events must have ordering enabled.
   */
  orderedDelivery?: boolean;
  /**
   * Region to publish messages to. Select 'default' to allow Google to auto-select the nearest
   * region. When using ordered delivery, the selected region must be allowed by message storage
   * policy.
   */
  region?: string;
  /**
   * Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service
   * account credentials directly, or Secret to select or create a stored secret that references
   * Google service account credentials.
   */
  googleAuthMethod?: GoogleAuthenticationMethod;
  /**
   * Contents of service account credentials (JSON keys) file downloaded from Google Cloud. To
   * upload a file, click the upload button at this field's upper right.
   */
  serviceAccountCredentials?: string;
  /** Select or create a stored text secret */
  secret?: string;
  /** The maximum number of items the Google API should batch before it sends them to the topic. */
  batchSize?: number;
  /**
   * The maximum amount of time, in milliseconds, that the Google API should wait to send a batch
   * (if the Batch size is not reached).
   */
  batchTimeout?: number;
  /** Maximum number of queued batches before blocking. */
  maxQueueSize?: number;
  /** Maximum size (KB) of batches to send. */
  maxRecordSizeKb?: number;
  /** Maximum time to wait before sending a batch (when batch size limit is not reached) */
  flushPeriod?: number;
  /** The maximum number of in-progress API requests before backpressure is applied. */
  maxInProgress?: number;
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
   * Binds 'topicName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'topicName' at
   * runtime.
   */
  templateTopicName?: string;
  /**
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputGooglePubsubSchema: Schema<OutputGooglePubsub> = s.object<OutputGooglePubsub>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("google_pubsub"), "google_pubsub"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  topicName: s.string(),
  createTopic: s.optional(s.boolean()),
  orderedDelivery: s.optional(s.boolean()),
  region: s.optional(s.string()),
  googleAuthMethod: s.optional(s.lazy(() => googleAuthenticationMethodSchema)),
  serviceAccountCredentials: s.optional(s.string()),
  secret: s.optional(s.string()),
  batchSize: s.optional(s.float64()),
  batchTimeout: s.optional(s.float64()),
  maxQueueSize: s.optional(s.float64()),
  maxRecordSizeKb: s.optional(s.float64()),
  flushPeriod: s.optional(s.float64()),
  maxInProgress: s.optional(s.float64()),
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
  templateTopicName: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  _keysMap: {
    maxRecordSizeKb: "maxRecordSizeKB",
    templateStreamtags: "__template_streamtags",
    templateTopicName: "__template_topicName",
    templateRegion: "__template_region",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
