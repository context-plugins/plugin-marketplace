import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiSiemEndpointPathSchema, type AiSiemEndpointPath } from "./ai-siem-endpoint-path.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";
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
import { region2Schema, type Region2 } from "./region2.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputSentinelOneAiSiem = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "sentinel_one_ai_siem" */
  type?: "sentinel_one_ai_siem";
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
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
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
   * The SentinelOne region to send events to. In most cases you can find the region by either
   * looking at your SentinelOne URL or knowing what geographic region your SentinelOne instance is
   * contained in.
   */
  region: Region2;
  /**
   * Endpoint to send events to. Use /services/collector/event for structured JSON payloads with
   * standard HEC top-level fields. Use /services/collector/raw for unstructured log lines (plain
   * text).
   */
  endpoint: AiSiemEndpointPath;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * In the SentinelOne Console select Policy & Settings then select the Singularity AI SIEM
   * section, API Keys will be at the bottom. Under Log Access Keys select a Write token and copy it
   * here
   */
  token?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /**
   * Base URL of the endpoint used to send events to, such as
   * https://<Your-S1-Tenant>.sentinelone.net. Must begin with http:// or https://, can include a
   * port number, and no trailing slashes. Matches pattern: ^https?://[a-zA-Z0-9.-]+(:[0-9]+)?$.
   */
  baseUrl?: string;
  /**
   * Define serverHost for events using a JavaScript expression. You must enclose text constants in
   * quotes (such as, 'myServer').
   */
  hostExpression?: string;
  /**
   * Define logFile for events using a JavaScript expression. You must enclose text constants in
   * quotes (such as, 'myLogFile.txt').
   */
  sourceExpression?: string;
  /**
   * Define the parser for events using a JavaScript expression. This value helps parse data into AI
   * SIEM. You must enclose text constants in quotes (such as, 'dottedJson'). For custom parsers,
   * substitute 'dottedJson' with your parser's name.
   */
  sourceTypeExpression?: string;
  /**
   * Define the dataSource.category for events using a JavaScript expression. This value helps
   * categorize data and helps enable extra features in SentinelOne AI SIEM. You must enclose text
   * constants in quotes. The default value is 'security'.
   */
  dataSourceCategoryExpression?: string;
  /**
   * Define the dataSource.name for events using a JavaScript expression. This value should reflect
   * the type of data being inserted into AI SIEM. You must enclose text constants in quotes (such
   * as, 'networkActivity' or 'authLogs').
   */
  dataSourceNameExpression?: string;
  /**
   * Define the dataSource.vendor for events using a JavaScript expression. This value should
   * reflect the vendor of the data being inserted into AI SIEM. You must enclose text constants in
   * quotes (such as, 'Cisco' or 'Microsoft').
   */
  dataSourceVendorExpression?: string;
  /**
   * Optionally, define the event.type for events using a JavaScript expression. This value acts as
   * a label, grouping events into meaningful categories. You must enclose text constants in quotes
   * (such as, 'Process Creation' or 'Network Connection').
   */
  eventTypeExpression?: string;
  /**
   * Define the serverHost for events using a JavaScript expression. This value will be passed to AI
   * SIEM. You must enclose text constants in quotes (such as, 'myServerName').
   */
  host?: string;
  /**
   * Specify the logFile value to pass as a parameter to SentinelOne AI SIEM. Don't quote this
   * value. The default is cribl.
   */
  source?: string;
  /**
   * Specify the sourcetype parameter for SentinelOne AI SIEM, which determines the parser. Don't
   * quote this value. For custom parsers, substitute hecRawParser with your parser's name. The
   * default is hecRawParser.
   */
  sourceType?: string;
  /**
   * Specify the dataSource.category value to pass as a parameter to SentinelOne AI SIEM. This value
   * helps categorize data and enables additional features. Don't quote this value. The default is
   * security.
   */
  dataSourceCategory?: string;
  /**
   * Specify the dataSource.name value to pass as a parameter to AI SIEM. This value should reflect
   * the type of data being inserted. Don't quote this value. The default is cribl.
   */
  dataSourceName?: string;
  /**
   * Specify the dataSource.vendorvalue to pass as a parameter to AI SIEM. This value should reflect
   * the vendor of the data being inserted. Don't quote this value. The default is cribl.
   */
  dataSourceVendor?: string;
  /**
   * Specify the event.type value to pass as an optional parameter to AI SIEM. This value acts as a
   * label, grouping events into meaningful categories like Process Creation, File Modification, or
   * Network Connection. Don't quote this value. By default, this field is empty.
   */
  eventType?: string;
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

export const outputSentinelOneAiSiemSchema: Schema<OutputSentinelOneAiSiem> =
  s.object<OutputSentinelOneAiSiem>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("sentinel_one_ai_siem"), "sentinel_one_ai_siem"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
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
    authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
    responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
    timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
    responseHonorRetryAfterHeader: s.optional(s.boolean()),
    region: region2Schema,
    endpoint: aiSiemEndpointPathSchema,
    onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
    description: s.optional(s.string()),
    token: s.optional(s.string()),
    textSecret: s.optional(s.string()),
    baseUrl: s.optional(s.string()),
    hostExpression: s.optional(s.string()),
    sourceExpression: s.optional(s.string()),
    sourceTypeExpression: s.optional(s.string()),
    dataSourceCategoryExpression: s.optional(s.string()),
    dataSourceNameExpression: s.optional(s.string()),
    dataSourceVendorExpression: s.optional(s.string()),
    eventTypeExpression: s.optional(s.string()),
    host: s.optional(s.string()),
    source: s.optional(s.string()),
    sourceType: s.optional(s.string()),
    dataSourceCategory: s.optional(s.string()),
    dataSourceName: s.optional(s.string()),
    dataSourceVendor: s.optional(s.string()),
    eventType: s.optional(s.string()),
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
