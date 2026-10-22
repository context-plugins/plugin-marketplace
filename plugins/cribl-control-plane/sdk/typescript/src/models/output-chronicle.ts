import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod79Schema, type AuthenticationMethod79 } from "./authentication-method79.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { customLabelSchema, type CustomLabel } from "./custom-label.js";
import {
  extraHttpHeaderConfInputElasticSchema,
  type ExtraHttpHeaderConfInputElastic,
} from "./extra-http-header-conf-input-elastic.js";
import {
  failedRequestLoggingModeSchema,
  type FailedRequestLoggingMode,
} from "./failed-request-logging-mode.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputChronicle = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "chronicle" */
  type?: "chronicle";
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
  /** API version */
  apiVersion?: string;
  /** Authentication method */
  authenticationMethod?: AuthenticationMethod79;
  /**
   * Automatically retry after unsuccessful response status codes, such as 429 (Too Many Requests)
   * or 503 (Service Unavailable)
   */
  responseRetrySettings?: ResponseRetrySettingConfOutputWebhook[];
  /** Retry settings for HTTP requests that exceed the request timeout. */
  timeoutRetrySettings?: TimeoutRetrySettingsType;
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) no longer than 180 seconds
   * after the retry request. \@{product} limits the delay to 180 seconds, even if the Retry-After
   * header specifies a longer delay. When enabled, takes precedence over user-configured retry
   * options. When disabled, all Retry-After headers are ignored.
   */
  responseHonorRetryAfterHeader?: boolean;
  /** Regional endpoint to send events to */
  region: string;
  /** Maximum number of ongoing requests before blocking */
  concurrency?: number;
  /** Maximum size, in KB, of the request body */
  maxPayloadSizeKb?: number;
  /** Maximum number of events to include in the request body. Default is 0 (unlimited). */
  maxPayloadEvents?: number;
  /** Compress the payload body before sending */
  compress?: boolean;
  /**
   * Reject certificates not authorized by a CA in the CA certificate path or by another trusted CA
   * (such as the system's). Enabled by default. When this setting is also present in TLS Settings
   * (Client Side), that value will take precedence.
   */
  rejectUnauthorized?: boolean;
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
  /** Headers to add to all events */
  extraHttpHeaders?: ExtraHttpHeaderConfInputElastic[];
  /**
   * Data to log when a request fails. All headers are redacted by default, unless listed as safe
   * headers below.
   */
  failedRequestLoggingMode?: FailedRequestLoggingMode;
  /** List of headers that are safe to log in plain text */
  safeHeaders?: string[];
  /**
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, \@{product} will
   * cycle through them in the order returned.
   */
  useRoundRobinDns?: boolean;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the
   * max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKb?: number;
  /** Chronicle API ingestion method */
  ingestionMethod?: string;
  /**
   * User-configured environment namespace to identify the data domain the logs originated from.
   * This namespace is used as a tag to identify the appropriate data domain for indexing and
   * enrichment functionality. Can be overwritten by event field __namespace.
   */
  namespace?: string;
  /** Default log type value to send to SecOps. Can be overwritten by event field __logType. */
  logType: string;
  /**
   * Name of the event field that contains the log text to send. If not specified, Stream sends a
   * JSON representation of the whole event.
   */
  logTextField?: string;
  /** The Google Cloud Platform (GCP) project ID to send events to */
  gcpProjectId: string;
  /**
   * The Google Cloud Platform (GCP) instance to send events to. This is the Chronicle customer
   * uuid.
   */
  gcpInstance: string;
  /** Custom labels to be added to every event */
  customLabels?: CustomLabel[];
  /**
   * Chronicle API service endpoint. If empty, defaults to the Region-specific endpoint. Otherwise,
   * it must point to a Chronicle API-compatible endpoint. (Example:
   * https://custom-endpoint.googleapis.com)
   */
  endpoint?: string;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Contents of service account credentials (JSON keys) file downloaded from Google Cloud. To
   * upload a file, click the upload button at this field's upper right.
   */
  serviceAccountCredentials?: string;
  /** Select or create a stored text secret */
  serviceAccountCredentialsSecret?: string;
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
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
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
  /**
   * Binds 'namespace' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'namespace' at
   * runtime.
   */
  templateNamespace?: string;
  /**
   * Binds 'logType' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'logType' at runtime.
   */
  templateLogType?: string;
  /**
   * Binds 'logTextField' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logTextField' at runtime.
   */
  templateLogTextField?: string;
  /**
   * Binds 'gcpProjectId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'gcpProjectId' at runtime.
   */
  templateGcpProjectId?: string;
  /**
   * Binds 'gcpInstance' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'gcpInstance' at runtime.
   */
  templateGcpInstance?: string;
  /**
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
};

export const outputChronicleSchema: Schema<OutputChronicle> = s.object<OutputChronicle>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("chronicle"), "chronicle"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  apiVersion: s.optional(s.string()),
  authenticationMethod: s.optional(s.lazy(() => authenticationMethod79Schema)),
  responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
  timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
  responseHonorRetryAfterHeader: s.optional(s.boolean()),
  region: s.string(),
  concurrency: s.optional(s.float64()),
  maxPayloadSizeKb: s.optional(s.float64()),
  maxPayloadEvents: s.optional(s.float64()),
  compress: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  timeoutSec: s.optional(s.float64()),
  maxConnectionReuseSec: s.optional(s.float64()),
  flushPeriodSec: s.optional(s.float64()),
  extraHttpHeaders: s.optional(s.array(s.lazy(() => extraHttpHeaderConfInputElasticSchema))),
  failedRequestLoggingMode: s.optional(s.lazy(() => failedRequestLoggingModeSchema)),
  safeHeaders: s.optional(s.array(s.string())),
  useRoundRobinDns: s.optional(s.boolean()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  totalMemoryLimitKb: s.optional(s.float64()),
  ingestionMethod: s.optional(s.string()),
  namespace: s.optional(s.string()),
  logType: s.string(),
  logTextField: s.optional(s.string()),
  gcpProjectId: s.string(),
  gcpInstance: s.string(),
  customLabels: s.optional(s.array(s.lazy(() => customLabelSchema))),
  endpoint: s.optional(s.string()),
  description: s.optional(s.string()),
  serviceAccountCredentials: s.optional(s.string()),
  serviceAccountCredentialsSecret: s.optional(s.string()),
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
  templateRegion: s.optional(s.string()),
  templateFailedRequestLoggingMode: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateNamespace: s.optional(s.string()),
  templateLogType: s.optional(s.string()),
  templateLogTextField: s.optional(s.string()),
  templateGcpProjectId: s.optional(s.string()),
  templateGcpInstance: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    totalMemoryLimitKb: "totalMemoryLimitKB",
    templateStreamtags: "__template_streamtags",
    templateRegion: "__template_region",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
    templateNamespace: "__template_namespace",
    templateLogType: "__template_logType",
    templateLogTextField: "__template_logTextField",
    templateGcpProjectId: "__template_gcpProjectId",
    templateGcpInstance: "__template_gcpInstance",
    templateEndpoint: "__template_endpoint",
  },
});
