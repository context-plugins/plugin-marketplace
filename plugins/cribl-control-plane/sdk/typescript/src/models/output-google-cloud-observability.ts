import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { endpointSchema, type Endpoint } from "./endpoint.js";
import {
  failedRequestLoggingModeSchema,
  type FailedRequestLoggingMode,
} from "./failed-request-logging-mode.js";
import {
  googleAuthenticationMethod3Schema,
  type GoogleAuthenticationMethod3,
} from "./google-authentication-method3.js";
import {
  keyValueMetadataConfOutputFilesystemSchema,
  type KeyValueMetadataConfOutputFilesystem,
} from "./key-value-metadata-conf-output-filesystem.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { otlpVersion3Schema, type OtlpVersion3 } from "./otlp-version3.js";
import { protocol4Schema, type Protocol4 } from "./protocol4.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import { tlsSettingsClientSide35Schema, type TlsSettingsClientSide35 } from "./tls-settings-client-side35.js";

export type OutputGoogleCloudObservability = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "google_cloud_observability" */
  type?: "google_cloud_observability";
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
  /** Discriminator value. */
  protocol?: Protocol4;
  /** Discriminator value. */
  otlpVersion?: OtlpVersion3;
  /**
   * Fixed Google Cloud Observability gRPC endpoint. All three signals share this transport; the
   * OTLP service path determines whether the call lands on traces, metrics, or logs.
   */
  endpoint?: Endpoint;
  /**
   * Choose Auto to use Google Application Default Credentials (ADC). Choose Secret to select or
   * create a stored secret that references Google service account credentials.
   */
  googleAuthMethod: GoogleAuthenticationMethod3;
  /**
   * Values already in OTLP AnyValue form (e.g. {string_value: "..."}) are serialized directly
   * instead of being wrapped as key-value maps
   */
  preserveNativeAnyValue?: boolean;
  /**
   * List of key-value pairs to send with each gRPC request. Value supports JavaScript expressions
   * that are evaluated just once, when the destination gets started. To pass credentials as
   * metadata, use 'C.Secret'.
   */
  metadata?: KeyValueMetadataConfOutputFilesystem[];
  /** Batch event data upon dynamic metadata (whether presented or not) */
  dynamicHeadersEnabled?: boolean;
  /**
   * When presented, this field which contains metadata, will be injected into the Destination
   * metadata and used to batch events.
   */
  dynamicHeadersField?: string;
  /** Maximum number of ongoing requests before blocking */
  concurrency?: number;
  /** Maximum size, in KB, of the request body sent to Google Cloud Observability */
  maxPayloadSizeKb?: number;
  /** Amount of time, in seconds, to wait for a request to complete before canceling it */
  timeoutSec?: number;
  /**
   * How long, in seconds, to reuse a keep-alive connection after its first use before forcing it
   * closed. Set to 0 to disable the time-based close and reuse connections for as long as the
   * destination server permits.
   */
  maxConnectionReuseSec?: number;
  /**
   * Maximum time between requests. Small values could cause the payload size to be smaller than the
   * configured Body size limit.
   */
  flushPeriodSec?: number;
  /**
   * Data to log when a request fails. All headers are redacted by default, unless listed as safe
   * headers below.
   */
  failedRequestLoggingMode?: FailedRequestLoggingMode;
  /** Amount of time (milliseconds) to wait for the connection to establish before retrying */
  connectionTimeout?: number;
  /** How often the sender should ping the peer to keep the connection open */
  keepAliveTime?: number;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide35;
  /**
   * Max number of events to include in the request body. Default is 0 (unlimited). Use to keep
   * outgoing data points within GCO request limits. For metrics, combine with the OTLP Metrics
   * function batchSize.
   */
  maxPayloadEvents?: number;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
  /** Select or create a stored text secret */
  secret?: string;
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
   * Binds 'failedRequestLoggingMode' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'failedRequestLoggingMode' at runtime.
   */
  templateFailedRequestLoggingMode?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputGoogleCloudObservabilitySchema: Schema<OutputGoogleCloudObservability> =
  s.object<OutputGoogleCloudObservability>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("google_cloud_observability"), "google_cloud_observability"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
    protocol: s.optional(s.lazy(() => protocol4Schema)),
    otlpVersion: s.optional(s.lazy(() => otlpVersion3Schema)),
    endpoint: s.optional(s.lazy(() => endpointSchema)),
    googleAuthMethod: googleAuthenticationMethod3Schema,
    preserveNativeAnyValue: s.optional(s.boolean()),
    metadata: s.optional(s.array(s.lazy(() => keyValueMetadataConfOutputFilesystemSchema))),
    dynamicHeadersEnabled: s.optional(s.boolean()),
    dynamicHeadersField: s.optional(s.string()),
    concurrency: s.optional(s.float64()),
    maxPayloadSizeKb: s.optional(s.float64()),
    timeoutSec: s.optional(s.float64()),
    maxConnectionReuseSec: s.optional(s.float64()),
    flushPeriodSec: s.optional(s.float64()),
    failedRequestLoggingMode: s.optional(s.lazy(() => failedRequestLoggingModeSchema)),
    connectionTimeout: s.optional(s.float64()),
    keepAliveTime: s.optional(s.float64()),
    tls: s.optional(s.lazy(() => tlsSettingsClientSide35Schema)),
    maxPayloadEvents: s.optional(s.float64()),
    onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
    description: s.optional(s.string()),
    secret: s.optional(s.string()),
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
    templateFailedRequestLoggingMode: s.optional(s.string()),
    templateOnBackpressure: s.optional(s.string()),
    _keysMap: {
      maxPayloadSizeKb: "maxPayloadSizeKB",
      templateStreamtags: "__template_streamtags",
      templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
      templateOnBackpressure: "__template_onBackpressure",
    },
  });
