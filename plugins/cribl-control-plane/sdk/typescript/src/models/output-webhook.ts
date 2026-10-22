import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType9Schema, type AuthenticationType9 } from "./authentication-type9.js";
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
import { format4Schema, type Format4 } from "./format4.js";
import { methodSchema, type Method } from "./method.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import {
  oauthHeaderConfInputServicenowTableSchema,
  type OauthHeaderConfInputServicenowTable,
} from "./oauth-header-conf-input-servicenow-table.js";
import {
  oauthParamConfInputServicenowTableSchema,
  type OauthParamConfInputServicenowTable,
} from "./oauth-param-conf-input-servicenow-table.js";
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
import { tlsSettingsClientSide34Schema, type TlsSettingsClientSide34 } from "./tls-settings-client-side34.js";
import { webhookUrlSchema, type WebhookUrl } from "./webhook-url.js";

export type OutputWebhook = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "webhook" */
  type?: "webhook";
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
  /** The method to use when sending events */
  method?: Method;
  /** How to format events before sending out */
  format?: Format4;
  /** Disable to close the connection immediately after sending the outgoing request */
  keepAlive?: boolean;
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
  /** Authentication method to use for the HTTP request */
  authType?: AuthenticationType9;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide34;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the
   * max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKb?: number;
  /**
   * Enable for optimal performance. Even if you have one hostname, it can expand to multiple IPs.
   * If disabled, consider enabling round-robin DNS.
   */
  loadBalanced?: boolean;
  /** Optional description for this configuration. */
  description?: string;
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
  /** Secret parameter value to pass in request body */
  secret?: string;
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
  /** URL of a webhook endpoint to send events to, such as http://localhost:10200 */
  url?: string;
  /** Exclude all IPs of the current host from the list of any resolved hostnames */
  excludeSelf?: boolean;
  /** Webhook URLs */
  urls?: WebhookUrl[];
  /** The interval in which to re-resolve any hostnames and pick up destinations from A records */
  dnsResolvePeriodSec?: number;
  /** How far back in time to keep traffic stats for load balancing purposes */
  loadBalanceStatsPeriodSec?: number;
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
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const outputWebhookSchema: Schema<OutputWebhook> = s.object<OutputWebhook>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("webhook"), "webhook"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  method: s.optional(s.lazy(() => methodSchema)),
  format: s.optional(s.lazy(() => format4Schema)),
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
  authType: s.optional(s.lazy(() => authenticationType9Schema)),
  tls: s.optional(s.lazy(() => tlsSettingsClientSide34Schema)),
  totalMemoryLimitKb: s.optional(s.float64()),
  loadBalanced: s.optional(s.boolean()),
  description: s.optional(s.string()),
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
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  loginUrl: s.optional(s.string()),
  secretParamName: s.optional(s.string()),
  secret: s.optional(s.string()),
  tokenAttributeName: s.optional(s.string()),
  authHeaderExpr: s.optional(s.string()),
  tokenTimeoutSecs: s.optional(s.float64()),
  oauthParams: s.optional(s.array(s.lazy(() => oauthParamConfInputServicenowTableSchema))),
  oauthHeaders: s.optional(s.array(s.lazy(() => oauthHeaderConfInputServicenowTableSchema))),
  refreshTokenField: s.optional(s.string()),
  rotateRefreshToken: s.optional(s.boolean()),
  refreshUrl: s.optional(s.string()),
  refreshRequestParams: s.optional(
    s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema)),
  ),
  url: s.optional(s.string()),
  excludeSelf: s.optional(s.boolean()),
  urls: s.optional(s.array(s.lazy(() => webhookUrlSchema))),
  dnsResolvePeriodSec: s.optional(s.float64()),
  loadBalanceStatsPeriodSec: s.optional(s.float64()),
  templateStreamtags: s.optional(s.string()),
  templateFailedRequestLoggingMode: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateLoginUrl: s.optional(s.string()),
  templateSecret: s.optional(s.string()),
  templateRefreshUrl: s.optional(s.string()),
  templateUrl: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    totalMemoryLimitKb: "totalMemoryLimitKB",
    templateStreamtags: "__template_streamtags",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateOnBackpressure: "__template_onBackpressure",
    templateLoginUrl: "__template_loginUrl",
    templateSecret: "__template_secret",
    templateRefreshUrl: "__template_refreshUrl",
    templateUrl: "__template_url",
  },
});
