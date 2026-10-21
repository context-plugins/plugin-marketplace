import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType14Schema, type AuthenticationType14 } from "./authentication-type14.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { compression106Schema, type Compression106 } from "./compression106.js";
import { compression107Schema, type Compression107 } from "./compression107.js";
import {
  extraHttpHeaderConfInputElasticSchema,
  type ExtraHttpHeaderConfInputElastic,
} from "./extra-http-header-conf-input-elastic.js";
import {
  failedRequestLoggingModeSchema,
  type FailedRequestLoggingMode,
} from "./failed-request-logging-mode.js";
import {
  keyValueMetadataConfOutputFilesystemSchema,
  type KeyValueMetadataConfOutputFilesystem,
} from "./key-value-metadata-conf-output-filesystem.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import {
  oauthHeaderConfInputServicenowTableSchema,
  type OauthHeaderConfInputServicenowTable,
} from "./oauth-header-conf-input-servicenow-table.js";
import {
  oauthParamConfInputServicenowTableSchema,
  type OauthParamConfInputServicenowTable,
} from "./oauth-param-conf-input-servicenow-table.js";
import { otlpVersion4Schema, type OtlpVersion4 } from "./otlp-version4.js";
import { protocol9Schema, type Protocol9 } from "./protocol9.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";
import { tlsSettingsClientSide35Schema, type TlsSettingsClientSide35 } from "./tls-settings-client-side35.js";

export type OutputOpenTelemetry = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "open_telemetry" */
  type?: "open_telemetry";
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
  /** Select a transport option for OpenTelemetry */
  protocol?: Protocol9;
  /**
   * The endpoint where OTel events will be sent. Enter any valid URL or an IP address (IPv4 or
   * IPv6; enclose IPv6 addresses in square brackets). Unspecified ports will default to 4317,
   * unless the endpoint is an HTTPS-based URL or TLS is enabled, in which case 443 will be used.
   */
  endpoint: string;
  /** The version of OTLP Protobuf definitions to use when structuring data to send */
  otlpVersion?: OtlpVersion4;
  /**
   * Values already in OTLP AnyValue form (e.g. {string_value: "..."}) are serialized directly
   * instead of being wrapped as key-value maps
   */
  preserveNativeAnyValue?: boolean;
  /** Type of compression to apply to messages sent to the OpenTelemetry endpoint */
  compress?: Compression106;
  /** Type of compression to apply to messages sent to the OpenTelemetry endpoint */
  httpCompress?: Compression107;
  /** Authentication type */
  authType?: AuthenticationType14;
  /**
   * If you want to send traces to the default `{endpoint}/v1/traces` endpoint, leave this field
   * empty; otherwise, specify the desired endpoint
   */
  httpTracesEndpointOverride?: string;
  /**
   * If you want to send metrics to the default `{endpoint}/v1/metrics` endpoint, leave this field
   * empty; otherwise, specify the desired endpoint
   */
  httpMetricsEndpointOverride?: string;
  /**
   * If you want to send logs to the default `{endpoint}/v1/logs` endpoint, leave this field empty;
   * otherwise, specify the desired endpoint
   */
  httpLogsEndpointOverride?: string;
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
  /** Maximum size, in KB, of the request body */
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
  /** Disable to close the connection immediately after sending the outgoing request */
  keepAlive?: boolean;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
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
  /** URL for OAuth */
  loginUrl?: string;
  /** Secret parameter name to pass in request body */
  secretParamName?: string;
  /**
   * Select or create a stored text secret for the OAuth secret parameter value to pass in request
   * body
   */
  oauthTextSecret?: string;
  /**
   * Name of the auth token attribute in the OAuth response. Can be top-level (e.g., 'token'); or
   * nested, using a period (e.g., 'data.token').
   */
  tokenAttributeName?: string;
  /**
   * JavaScript expression to compute the Authorization header value to pass in requests. The value
   * `${token}` is used to reference the token obtained from authentication, e.g.: `Bearer
   * ${token}`.
   */
  authHeaderExpr?: string;
  /** How often the OAuth token should be refreshed. */
  tokenTimeoutSecs?: number;
  /**
   * Additional parameters to send in the OAuth login request. \@{product} will combine the secret
   * with these parameters, and will send the URL-encoded result in a POST request to the endpoint
   * specified in the 'Login URL'. We'll automatically add the content-type header
   * 'application/x-www-form-urlencoded' when sending this request.
   */
  oauthParams?: OauthParamConfInputServicenowTable[];
  /**
   * Additional headers to send in the OAuth login request. \@{product} will automatically add the
   * content-type header 'application/x-www-form-urlencoded' when sending this request.
   */
  oauthHeaders?: OauthHeaderConfInputServicenowTable[];
  /**
   * Reject certificates not authorized by a CA in the CA certificate path or by another trusted CA
   * (such as the system's). Enabled by default. When this setting is also present in TLS Settings
   * (Client Side), that value will take precedence.
   */
  rejectUnauthorized?: boolean;
  /**
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, \@{product} will
   * cycle through them in the order returned. For optimal performance, consider enabling this
   * setting for non-load balanced destinations.
   */
  useRoundRobinDns?: boolean;
  /** Headers to add to all events */
  extraHttpHeaders?: ExtraHttpHeaderConfInputElastic[];
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
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide35;
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
  /**
   * Binds 'loginUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'loginUrl' at runtime.
   */
  templateLoginUrl?: string;
};

export const outputOpenTelemetrySchema: Schema<OutputOpenTelemetry> = s.object<OutputOpenTelemetry>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("open_telemetry"), "open_telemetry"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  protocol: s.optional(s.lazy(() => protocol9Schema)),
  endpoint: s.string(),
  otlpVersion: s.optional(s.lazy(() => otlpVersion4Schema)),
  preserveNativeAnyValue: s.optional(s.boolean()),
  compress: s.optional(s.lazy(() => compression106Schema)),
  httpCompress: s.optional(s.lazy(() => compression107Schema)),
  authType: s.optional(s.lazy(() => authenticationType14Schema)),
  httpTracesEndpointOverride: s.optional(s.string()),
  httpMetricsEndpointOverride: s.optional(s.string()),
  httpLogsEndpointOverride: s.optional(s.string()),
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
  keepAlive: s.optional(s.boolean()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  description: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  loginUrl: s.optional(s.string()),
  secretParamName: s.optional(s.string()),
  oauthTextSecret: s.optional(s.string()),
  tokenAttributeName: s.optional(s.string()),
  authHeaderExpr: s.optional(s.string()),
  tokenTimeoutSecs: s.optional(s.float64()),
  oauthParams: s.optional(s.array(s.lazy(() => oauthParamConfInputServicenowTableSchema))),
  oauthHeaders: s.optional(s.array(s.lazy(() => oauthHeaderConfInputServicenowTableSchema))),
  rejectUnauthorized: s.optional(s.boolean()),
  useRoundRobinDns: s.optional(s.boolean()),
  extraHttpHeaders: s.optional(s.array(s.lazy(() => extraHttpHeaderConfInputElasticSchema))),
  safeHeaders: s.optional(s.array(s.string())),
  responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
  timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
  responseHonorRetryAfterHeader: s.optional(s.boolean()),
  tls: s.optional(s.lazy(() => tlsSettingsClientSide35Schema)),
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
  templateLoginUrl: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    templateStreamtags: "__template_streamtags",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
    templateLoginUrl: "__template_loginUrl",
  },
});
