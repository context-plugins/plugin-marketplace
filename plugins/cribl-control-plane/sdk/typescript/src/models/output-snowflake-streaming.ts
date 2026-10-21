import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
import { mode76Schema, type Mode76 } from "./mode76.js";
import { privateKeySchema, type PrivateKey } from "./private-key.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputSnowflakeStreaming = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "snowflake_streaming" */
  type?: "snowflake_streaming";
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
  /** Snowflake account identifier in org-account format (example: MYORG-MYACCOUNT) */
  accountIdentifier: string;
  /** Snowflake user with key-pair authentication configured */
  user: string;
  /** Private key */
  pem: PrivateKey;
  /** Target database */
  database: string;
  /** Target schema */
  schema: string;
  /** Target table */
  table: string;
  /**
   * Override endpoint URL (for PrivateLink or custom deployments). Defaults to
   * https://<accountIdentifier>.snowflakecomputing.com:443
   */
  url?: string;
  /** Snowflake role to assume for this connection */
  role?: string;
  /**
   * Keep connections open between requests. Disable only if experiencing connection pooling issues.
   */
  keepAlive?: boolean;
  /** Maximum number of ongoing requests before blocking */
  concurrency?: number;
  /**
   * Maximum uncompressed size of each batch. With compression enabled (default), batches are
   * zstd-compressed before sending. Snowflake has observed a ~4 MB limit on the compressed wire
   * size.
   */
  maxPayloadSizeKb?: number;
  /** Maximum number of events per request. Default is 0 (unlimited, size-gated only). */
  maxPayloadEvents?: number;
  /** Compress the payload body using zstd compression before sending. */
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
   * Timeout in seconds for token exchange, channel open/close, and hostname discovery. Defaults to
   * 30 seconds.
   */
  controlRequestTimeoutSec?: number;
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
   * Binds 'accountIdentifier' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'accountIdentifier' at runtime.
   */
  templateAccountIdentifier?: string;
  /**
   * Binds 'user' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'user' at runtime.
   */
  templateUser?: string;
  /**
   * Binds 'database' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'database' at runtime.
   */
  templateDatabase?: string;
  /**
   * Binds 'schema' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'schema' at runtime.
   */
  templateSchema?: string;
  /**
   * Binds 'table' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'table' at runtime.
   */
  templateTable?: string;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
  /**
   * Binds 'role' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'role' at runtime.
   */
  templateRole?: string;
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

export const outputSnowflakeStreamingSchema: Schema<OutputSnowflakeStreaming> =
  s.object<OutputSnowflakeStreaming>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("snowflake_streaming"), "snowflake_streaming"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
    accountIdentifier: s.string(),
    user: s.string(),
    pem: privateKeySchema,
    database: s.string(),
    schema: s.string(),
    table: s.string(),
    url: s.optional(s.string()),
    role: s.optional(s.string()),
    keepAlive: s.optional(s.boolean()),
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
    controlRequestTimeoutSec: s.optional(s.float64()),
    responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
    timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
    responseHonorRetryAfterHeader: s.optional(s.boolean()),
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
    templateAccountIdentifier: s.optional(s.string()),
    templateUser: s.optional(s.string()),
    templateDatabase: s.optional(s.string()),
    templateSchema: s.optional(s.string()),
    templateTable: s.optional(s.string()),
    templateUrl: s.optional(s.string()),
    templateRole: s.optional(s.string()),
    templateFailedRequestLoggingMode: s.optional(s.string()),
    templateOnBackpressure: s.optional(s.string()),
    _keysMap: {
      maxPayloadSizeKb: "maxPayloadSizeKB",
      templateStreamtags: "__template_streamtags",
      templateAccountIdentifier: "__template_accountIdentifier",
      templateUser: "__template_user",
      templateDatabase: "__template_database",
      templateSchema: "__template_schema",
      templateTable: "__template_table",
      templateUrl: "__template_url",
      templateRole: "__template_role",
      templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
      templateOnBackpressure: "__template_onBackpressure",
    },
  });
