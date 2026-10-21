import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationOauthSchema,
  type AuthenticationOptionsHealthCheckAuthenticationOauth,
} from "./authentication-options-health-check-authentication-oauth.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { endpointConfigurationSchema, type EndpointConfiguration } from "./endpoint-configuration.js";
import {
  extraHttpHeaderConfInputElasticSchema,
  type ExtraHttpHeaderConfInputElastic,
} from "./extra-http-header-conf-input-elastic.js";
import {
  failedRequestLoggingModeSchema,
  type FailedRequestLoggingMode,
} from "./failed-request-logging-mode.js";
import { format5Schema, type Format5 } from "./format5.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { oAuthSecretSourceSchema, type OAuthSecretSource } from "./oauth-secret-source.js";
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

export type OutputSentinel = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "sentinel" */
  type?: "sentinel";
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
  /** Disable to close the connection immediately after sending the outgoing request */
  keepAlive?: boolean;
  /** Maximum number of ongoing requests before blocking */
  concurrency?: number;
  /** Maximum size (KB) of the request body (defaults to the API's maximum limit of 1000 KB) */
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
  /**
   * Headers to add to all events. You can also add headers dynamically on a per-event basis in the
   * __headers field, as explained in [Cribl
   * Docs](https://docs.cribl.io/stream/destinations-webhook/#internal-fields).
   */
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
  /** Discriminator value. */
  authType?: AuthenticationOptionsHealthCheckAuthenticationOauth;
  /** URL for OAuth */
  loginUrl: string;
  /** Secret parameter value to pass in request body */
  secret?: string;
  /**
   * Field name in the token response that contains a refresh token (example: 'refresh_token'). When
   * set, \@{product} will use the refresh token to obtain new access tokens without re-sending
   * credentials.
   */
  refreshTokenField?: string;
  /**
   * \@{product} will update the stored value on each successful refresh. Enable if the server
   * issues a new refresh token on every use.
   */
  rotateRefreshToken?: boolean;
  /** Override the refresh endpoint URL if it differs from the Login URL. Defaults to Login URL. */
  refreshUrl?: string;
  /**
   * Parameters to include in the refresh token request body. Most servers require 'client_id' here.
   * If not set, \@{product} sends only grant_type, refresh_token, and client_secret.
   */
  refreshRequestParams?: RefreshRequestParamConfHealthCheckAuthenticationOauthSecret[];
  /** Enter the OAuth secret directly, or select a stored text secret */
  oauthSecretSource?: OAuthSecretSource;
  /**
   * JavaScript expression to compute the Client ID for the Azure application. Can be a constant.
   */
  clientId: string;
  /** Scope to pass in the OAuth request */
  scope?: string;
  /** Enter the data collection endpoint URL or the individual ID */
  endpointUrlConfiguration: EndpointConfiguration;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the
   * max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKb?: number;
  /** Optional description for this configuration. */
  description?: string;
  format?: Format5;
  /**
   * Expression to evaluate on events to generate output. Example: `raw=${_raw}`. See [Cribl
   * Docs](https://docs.cribl.io/stream/destinations-webhook#custom-format) for other examples. If
   * empty, the full event is sent as stringified JSON.
   */
  customSourceExpression?: string;
  /** Whether to drop events when the source expression evaluates to null */
  customDropWhenNull?: boolean;
  /** Delimiter string to insert between individual events. Defaults to newline character. */
  customEventDelimiter?: string;
  /**
   * Content type to use for request. Defaults to application/x-ndjson. Any content types set in
   * Advanced Settings > Extra HTTP headers will override this entry.
   */
  customContentType?: string;
  /**
   * Expression specifying how to format the payload for each batch. To reference the events to
   * send, use the `${events}` variable. Example expression: `{ "items" : [${events}] }` would send
   * the batch inside a JSON object.
   */
  customPayloadExpression?: string;
  /** HTTP content-type header value */
  advancedContentType?: string;
  /**
   * Custom JavaScript code to format incoming event data accessible through the __e variable. The
   * formatted content is added to (__e['__eventOut']) if available. Otherwise, the original event
   * is serialized as JSON. Caution: This function is evaluated in an unprotected context, allowing
   * you to execute almost any JavaScript code.
   */
  formatEventCode?: string;
  /**
   * Optional JavaScript code to format the payload sent to the Destination. The payload, containing
   * a batch of formatted events, is accessible through the __e['payload'] variable. The formatted
   * payload is returned in the __e['__payloadOut'] variable. Caution: This function is evaluated in
   * an unprotected context, allowing you to execute almost any JavaScript code.
   */
  formatPayloadCode?: string;
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
  /** Select or create a stored text secret for the OAuth secret value */
  oauthTextSecret?: string;
  /** URL to send events to. Can be overwritten by an event's __url field. */
  url?: string;
  /** Immutable ID for the Data Collection Rule (DCR) */
  dcrId?: string;
  /**
   * Data collection endpoint (DCE) URL. In the format:
   * `https://<Endpoint-Name>-<Identifier>.<Region>.ingest.monitor.azure.com`
   */
  dceEndpoint?: string;
  /** The name of the stream (Sentinel table) in which to store the events */
  streamName?: string;
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
  /**
   * Binds 'secret' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'secret' at runtime.
   */
  templateSecret?: string;
  /**
   * Binds 'refreshUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'refreshUrl' at
   * runtime.
   */
  templateRefreshUrl?: string;
  /**
   * Binds 'client_id' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'client_id' at
   * runtime.
   */
  templateClientId?: string;
  /**
   * Binds 'scope' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'scope' at runtime.
   */
  templateScope?: string;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
  /**
   * Binds 'dcrID' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'dcrID' at runtime.
   */
  templateDcrId?: string;
  /**
   * Binds 'dceEndpoint' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'dceEndpoint' at runtime.
   */
  templateDceEndpoint?: string;
  /**
   * Binds 'streamName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamName' at
   * runtime.
   */
  templateStreamName?: string;
};

export const outputSentinelSchema: Schema<OutputSentinel> = s.object<OutputSentinel>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("sentinel"), "sentinel"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
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
  useRoundRobinDns: s.optional(s.boolean()),
  failedRequestLoggingMode: s.optional(s.lazy(() => failedRequestLoggingModeSchema)),
  safeHeaders: s.optional(s.array(s.string())),
  responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
  timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
  responseHonorRetryAfterHeader: s.optional(s.boolean()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  authType: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationOauthSchema)),
  loginUrl: s.string(),
  secret: s.optional(s.string()),
  refreshTokenField: s.optional(s.string()),
  rotateRefreshToken: s.optional(s.boolean()),
  refreshUrl: s.optional(s.string()),
  refreshRequestParams: s.optional(
    s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema)),
  ),
  oauthSecretSource: s.optional(s.lazy(() => oAuthSecretSourceSchema)),
  clientId: s.string(),
  scope: s.optional(s.string()),
  endpointUrlConfiguration: endpointConfigurationSchema,
  totalMemoryLimitKb: s.optional(s.float64()),
  description: s.optional(s.string()),
  format: s.optional(s.lazy(() => format5Schema)),
  customSourceExpression: s.optional(s.string()),
  customDropWhenNull: s.optional(s.boolean()),
  customEventDelimiter: s.optional(s.string()),
  customContentType: s.optional(s.string()),
  customPayloadExpression: s.optional(s.string()),
  advancedContentType: s.optional(s.string()),
  formatEventCode: s.optional(s.string()),
  formatPayloadCode: s.optional(s.string()),
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
  oauthTextSecret: s.optional(s.string()),
  url: s.optional(s.string()),
  dcrId: s.optional(s.string()),
  dceEndpoint: s.optional(s.string()),
  streamName: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateFailedRequestLoggingMode: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateLoginUrl: s.optional(s.string()),
  templateSecret: s.optional(s.string()),
  templateRefreshUrl: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateScope: s.optional(s.string()),
  templateUrl: s.optional(s.string()),
  templateDcrId: s.optional(s.string()),
  templateDceEndpoint: s.optional(s.string()),
  templateStreamName: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    clientId: "client_id",
    endpointUrlConfiguration: "endpointURLConfiguration",
    totalMemoryLimitKb: "totalMemoryLimitKB",
    dcrId: "dcrID",
    templateStreamtags: "__template_streamtags",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
    templateLoginUrl: "__template_loginUrl",
    templateSecret: "__template_secret",
    templateRefreshUrl: "__template_refreshUrl",
    templateClientId: "__template_client_id",
    templateScope: "__template_scope",
    templateUrl: "__template_url",
    templateDcrId: "__template_dcrID",
    templateDceEndpoint: "__template_dceEndpoint",
    templateStreamName: "__template_streamName",
  },
});
