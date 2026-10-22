import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType22Schema, type AuthenticationType22 } from "./authentication-type22.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import {
  extraHttpHeaderConfInputElasticSchema,
  type ExtraHttpHeaderConfInputElastic,
} from "./extra-http-header-conf-input-elastic.js";
import {
  failedRequestLoggingModeSchema,
  type FailedRequestLoggingMode,
} from "./failed-request-logging-mode.js";
import { messageFormatSchema, type MessageFormat } from "./message-format.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauthSecret,
} from "./refresh-request-param-conf-health-check-authentication-oauth-secret.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputLoki = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "loki" */
  type?: "loki";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /**
   * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. These fields are
   * added as labels to generated logs.
   */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** The endpoint to send logs to */
  url: string;
  /**
   * Name of the event field that contains the message to send. If not specified, Stream sends a
   * JSON representation of the whole event.
   */
  message?: string;
  /** Format to use when sending logs to Loki (Protobuf or JSON) */
  messageFormat?: MessageFormat;
  /**
   * List of labels to send with logs. Labels define Loki streams, so use static labels to avoid
   * proliferating label value combinations and streams. Can be merged and/or overridden by the
   * event's __labels field. Example: '__labels: {host: "cribl.io", level: "error"}'
   */
  labels?: RefreshRequestParamConfHealthCheckAuthenticationOauthSecret[];
  /** Authentication type */
  authType?: AuthenticationType22;
  /**
   * Maximum number of ongoing requests before blocking. Warning: Setting this value > 1 can cause
   * Loki to complain about entries being delivered out of order.
   */
  concurrency?: number;
  /**
   * Maximum size, in KB, of the request body. Warning: Setting this too low can increase the number
   * of ongoing requests (depending on the value of 'Request concurrency'); this can cause Loki to
   * complain about entries being delivered out of order.
   */
  maxPayloadSizeKb?: number;
  /**
   * Maximum number of events to include in the request body. Defaults to 0 (unlimited). Warning:
   * Setting this too low can increase the number of ongoing requests (depending on the value of
   * 'Request concurrency'); this can cause Loki to complain about entries being delivered out of
   * order.
   */
  maxPayloadEvents?: number;
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
   * configured Maximum time between requests. Small values can reduce the payload size below the
   * configured 'Max record size' and 'Max events per request'. Warning: Setting this too low can
   * increase the number of ongoing requests (depending on the value of 'Request concurrency'); this
   * can cause Loki to complain about entries being delivered out of order.
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
  /**
   * Add per-event HTTP headers from the __headers field to outgoing requests. Events with different
   * headers are batched and sent separately.
   */
  enableDynamicHeaders?: boolean;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the
   * max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKb?: number;
  /** Optional description for this configuration. */
  description?: string;
  /** Compress the payload body before sending */
  compress?: boolean;
  /**
   * Bearer token to include in the authorization header. In Grafana Cloud, this is generally built
   * by concatenating the username and the API key, separated by a colon. Example:
   * <your-username>:<your-api-key>
   */
  token?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** Username for authentication */
  username?: string;
  /** Password (API key in Grafana Cloud domain) for authentication */
  password?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
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

export const outputLokiSchema: Schema<OutputLoki> = s.object<OutputLoki>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("loki"), "loki"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  url: s.string(),
  message: s.optional(s.string()),
  messageFormat: s.optional(s.lazy(() => messageFormatSchema)),
  labels: s.optional(
    s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema)),
  ),
  authType: s.optional(s.lazy(() => authenticationType22Schema)),
  concurrency: s.optional(s.float64()),
  maxPayloadSizeKb: s.optional(s.float64()),
  maxPayloadEvents: s.optional(s.float64()),
  rejectUnauthorized: s.optional(s.boolean()),
  timeoutSec: s.optional(s.float64()),
  maxConnectionReuseSec: s.optional(s.float64()),
  flushPeriodSec: s.optional(s.float64()),
  extraHttpHeaders: s.optional(s.array(s.lazy(() => extraHttpHeaderConfInputElasticSchema))),
  useRoundRobinDns: s.optional(s.boolean()),
  failedRequestLoggingMode: s.optional(s.lazy(() => failedRequestLoggingModeSchema)),
  safeHeaders: s.optional(s.array(s.string())),
  responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
  timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
  responseHonorRetryAfterHeader: s.optional(s.boolean()),
  enableDynamicHeaders: s.optional(s.boolean()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  totalMemoryLimitKb: s.optional(s.float64()),
  description: s.optional(s.string()),
  compress: s.optional(s.boolean()),
  token: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
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
    totalMemoryLimitKb: "totalMemoryLimitKB",
    templateStreamtags: "__template_streamtags",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
