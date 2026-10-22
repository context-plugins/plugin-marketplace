import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod100Schema, type AuthenticationMethod100 } from "./authentication-method100.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { dataSetSiteSchema, type DataSetSite } from "./data-set-site.js";
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
import { severity3Schema, type Severity3 } from "./severity3.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputDataset = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "dataset" */
  type?: "dataset";
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
   * Name of the event field that contains the message or attributes to send. If not specified, all
   * of the event's non-internal fields will be sent as attributes.
   */
  messageField?: string;
  /**
   * Fields to exclude from the event if the Message field is either unspecified or refers to an
   * object. Ignored if the Message field is a string. If empty, we send all non-internal fields.
   */
  excludeFields?: string[];
  /**
   * Name of the event field that contains the `serverHost` identifier. If not specified, defaults
   * to `cribl_<outputId>`.
   */
  serverHostField?: string;
  /**
   * Name of the event field that contains the timestamp. If not specified, defaults to `ts`,
   * `_time`, or `Date.now()`, in that order.
   */
  timestampField?: string;
  /**
   * Default value for event severity. If the `sev` or `__severity` fields are set on an event, the
   * first one matching will override this value.
   */
  defaultSeverity?: Severity3;
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
  /** DataSet site to which events should be sent */
  site?: DataSetSite;
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
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, \@{product} will
   * cycle through them in the order returned. For optimal performance, consider enabling this
   * setting for non-load balanced destinations.
   */
  useRoundRobinDns?: boolean;
  /**
   * Data to log when a request fails. All headers are redacted by default, unless listed as safe
   * headers below.
   */
  failedRequestLoggingMode?: FailedRequestLoggingMode;
  /** List of headers that are safe to log in plain text */
  safeHeaders?: string[];
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Enter API key directly, or select a stored secret */
  authType?: AuthenticationMethod100;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the
   * max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKb?: number;
  /** Optional description for this configuration. */
  description?: string;
  /** Custom Cribl API endpoint URL. */
  customUrl?: string;
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
  /** A 'Log Write Access' API key for the DataSet account */
  apiKey?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
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
  /**
   * Binds 'customUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'customUrl' at
   * runtime.
   */
  templateCustomUrl?: string;
};

export const outputDatasetSchema: Schema<OutputDataset> = s.object<OutputDataset>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("dataset"), "dataset"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  messageField: s.optional(s.string()),
  excludeFields: s.optional(s.array(s.string())),
  serverHostField: s.optional(s.string()),
  timestampField: s.optional(s.string()),
  defaultSeverity: s.optional(s.lazy(() => severity3Schema)),
  responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
  timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
  responseHonorRetryAfterHeader: s.optional(s.boolean()),
  site: s.optional(s.lazy(() => dataSetSiteSchema)),
  concurrency: s.optional(s.float64()),
  maxPayloadSizeKb: s.optional(s.float64()),
  maxPayloadEvents: s.optional(s.float64()),
  compress: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  timeoutSec: s.optional(s.float64()),
  maxConnectionReuseSec: s.optional(s.float64()),
  flushPeriodSec: s.optional(s.float64()),
  extraHttpHeaders: s.optional(s.array(s.lazy(() => extraHttpHeaderConfInputElasticSchema))),
  useRoundRobinDns: s.optional(s.boolean()),
  failedRequestLoggingMode: s.optional(s.lazy(() => failedRequestLoggingModeSchema)),
  safeHeaders: s.optional(s.array(s.string())),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  authType: s.optional(s.lazy(() => authenticationMethod100Schema)),
  totalMemoryLimitKb: s.optional(s.float64()),
  description: s.optional(s.string()),
  customUrl: s.optional(s.string()),
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
  apiKey: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateFailedRequestLoggingMode: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateCustomUrl: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    totalMemoryLimitKb: "totalMemoryLimitKB",
    templateStreamtags: "__template_streamtags",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
    templateCustomUrl: "__template_customUrl",
  },
});
