import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod102Schema, type AuthenticationMethod102 } from "./authentication-method102.js";
import { authenticationType13Schema, type AuthenticationType13 } from "./authentication-type13.js";
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
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputPrometheus = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "prometheus" */
  type?: "prometheus";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /**
   * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. These fields are
   * added as dimensions to generated metrics.
   */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** The endpoint to send metrics to */
  url: string;
  /**
   * JavaScript expression that can be used to rename metrics. For example, name.replace(/\./g, '_')
   * will replace all '.' characters in a metric's name with the supported '_' character. Use the
   * 'name' global variable to access the metric's name. You can access event fields' values via
   * __e.<fieldName>.
   */
  metricRenameExpr?: string;
  /** Generate and send metadata (`type` and `metricFamilyName`) requests */
  sendMetadata?: boolean;
  /**
   * Serialize histogram bucket series as `<metric>_bucket` to match Prometheus histogram naming
   * convention
   */
  usePrometheusHistogramBucketSuffix?: boolean;
  /** Maximum number of ongoing requests before blocking */
  concurrency?: number;
  /** Maximum size, in KB, of the request body */
  maxPayloadSizeKb?: number;
  /** Maximum number of events to include in the request body. Default is 0 (unlimited). */
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
  /** Remote Write authentication type */
  authType?: AuthenticationType13;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * How frequently metrics metadata is sent out. Value cannot be smaller than the base Flush period
   * set above.
   */
  metricsFlushPeriodSec?: number;
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
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Bearer token to include in the authorization header */
  token?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod102;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
  /** AWS region used to sign Remote Write requests */
  region?: string;
  /**
   * ID used to sign Remote Write requests (for example, `aps` for Amazon Managed Service for
   * Prometheus)
   */
  awsService?: string;
  /** Use Assume Role credentials to access Prometheus */
  enableAssumeRole?: boolean;
  /** Amazon Resource Name (ARN) of the role to assume */
  assumeRoleArn?: string;
  /** External ID to use when assuming role */
  assumeRoleExternalId?: string;
  /**
   * Duration of the assumed role's session, in seconds. Minimum is 900 (15 minutes), default is
   * 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  durationSeconds?: number;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
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
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
  /**
   * Binds 'awsService' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'awsService' at
   * runtime.
   */
  templateAwsService?: string;
  /**
   * Binds 'assumeRoleArn' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'assumeRoleArn' at runtime.
   */
  templateAssumeRoleArn?: string;
  /**
   * Binds 'assumeRoleExternalId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'assumeRoleExternalId' at runtime.
   */
  templateAssumeRoleExternalId?: string;
};

export const outputPrometheusSchema: Schema<OutputPrometheus> = s.object<OutputPrometheus>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("prometheus"), "prometheus"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  url: s.string(),
  metricRenameExpr: s.optional(s.string()),
  sendMetadata: s.optional(s.boolean()),
  usePrometheusHistogramBucketSuffix: s.optional(s.boolean()),
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
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  authType: s.optional(s.lazy(() => authenticationType13Schema)),
  description: s.optional(s.string()),
  metricsFlushPeriodSec: s.optional(s.float64()),
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
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethod102Schema)),
  awsSecret: s.optional(s.string()),
  region: s.optional(s.string()),
  awsService: s.optional(s.string()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.optional(s.string()),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  templateStreamtags: s.optional(s.string()),
  templateUrl: s.optional(s.string()),
  templateFailedRequestLoggingMode: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateAwsService: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    templateStreamtags: "__template_streamtags",
    templateUrl: "__template_url",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
    templateRegion: "__template_region",
    templateAwsService: "__template_awsService",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
  },
});
