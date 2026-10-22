import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTypeHttpSchema, type AuthTypeHttp } from "./auth-type-http.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { bulkApiUrlSchema, type BulkApiUrl } from "./bulk-api-url.js";
import { compressionSchema, type Compression } from "./compression.js";
import { elasticVersionSchema, type ElasticVersion } from "./elastic-version.js";
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
  saslExtensionConfInputKafkaSchema,
  type SaslExtensionConfInputKafka,
} from "./sasl-extension-conf-input-kafka.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";
import { writeActionSchema, type WriteAction } from "./write-action.js";

export type OutputElastic = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "elastic" */
  type?: "elastic";
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
   * Enable for optimal performance. Even if you have one hostname, it can expand to multiple IPs.
   * If disabled, consider enabling round-robin DNS.
   */
  loadBalanced?: boolean;
  /**
   * Index or data stream to send events to. Must be a JavaScript expression (which can evaluate to
   * a constant value), enclosed in quotes or backticks. Can be overwritten by an event's __index
   * field.
   */
  index: string;
  /** Document type to use for events. Can be overwritten by an event's __type field. */
  docType?: string;
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
  /** Extra parameters */
  extraParams?: SaslExtensionConfInputKafka[];
  /** Authentication settings for HTTP requests. */
  auth?: AuthTypeHttp;
  /**
   * Optional Elasticsearch version, used to format events. If not specified, will auto-discover
   * version.
   */
  elasticVersion?: ElasticVersion;
  /** Optional Elasticsearch destination pipeline */
  elasticPipeline?: string;
  /**
   * Include the `document_id` field when sending events to an Elastic TSDS (time series data
   * stream)
   */
  includeDocId?: boolean;
  /** Action to use when writing events. Must be set to `Create` when writing to a data stream. */
  writeAction?: WriteAction;
  /**
   * Retry failed events when a bulk request to Elastic is successful, but the response body returns
   * an error for one or more events in the batch
   */
  retryPartialErrors?: boolean;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * The Cloud ID or URL to an Elastic cluster to send events to. Example: http://elastic:9200/_bulk
   */
  url?: string;
  /**
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, \@{product} will
   * cycle through them in the order returned. For optimal performance, consider enabling this
   * setting for non-load balanced destinations.
   */
  useRoundRobinDns?: boolean;
  /** Exclude all IPs of the current host from the list of any resolved hostnames */
  excludeSelf?: boolean;
  /** Bulk API URLs */
  urls?: BulkApiUrl[];
  /** The interval in which to re-resolve any hostnames and pick up destinations from A records */
  dnsResolvePeriodSec?: number;
  /** How far back in time to keep traffic stats for load balancing purposes */
  loadBalanceStatsPeriodSec?: number;
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
   * Binds 'index' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'index' at runtime.
   */
  templateIndex?: string;
  /**
   * Binds 'docType' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'docType' at runtime.
   */
  templateDocType?: string;
  /**
   * Binds 'failedRequestLoggingMode' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'failedRequestLoggingMode' at runtime.
   */
  templateFailedRequestLoggingMode?: string;
  /**
   * Binds 'elasticPipeline' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'elasticPipeline' at runtime.
   */
  templateElasticPipeline?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const outputElasticSchema: Schema<OutputElastic> = s.object<OutputElastic>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("elastic"), "elastic"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  loadBalanced: s.optional(s.boolean()),
  index: s.string(),
  docType: s.optional(s.string()),
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
  responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
  timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
  responseHonorRetryAfterHeader: s.optional(s.boolean()),
  extraParams: s.optional(s.array(s.lazy(() => saslExtensionConfInputKafkaSchema))),
  auth: s.optional(s.lazy(() => authTypeHttpSchema)),
  elasticVersion: s.optional(s.lazy(() => elasticVersionSchema)),
  elasticPipeline: s.optional(s.string()),
  includeDocId: s.optional(s.boolean()),
  writeAction: s.optional(s.lazy(() => writeActionSchema)),
  retryPartialErrors: s.optional(s.boolean()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  description: s.optional(s.string()),
  url: s.optional(s.string()),
  useRoundRobinDns: s.optional(s.boolean()),
  excludeSelf: s.optional(s.boolean()),
  urls: s.optional(s.array(s.lazy(() => bulkApiUrlSchema))),
  dnsResolvePeriodSec: s.optional(s.float64()),
  loadBalanceStatsPeriodSec: s.optional(s.float64()),
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
  templateIndex: s.optional(s.string()),
  templateDocType: s.optional(s.string()),
  templateFailedRequestLoggingMode: s.optional(s.string()),
  templateElasticPipeline: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateUrl: s.optional(s.string()),
  _keysMap: {
    maxPayloadSizeKb: "maxPayloadSizeKB",
    templateStreamtags: "__template_streamtags",
    templateIndex: "__template_index",
    templateDocType: "__template_docType",
    templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
    templateElasticPipeline: "__template_elasticPipeline",
    templateOnBackpressure: "__template_onBackpressure",
    templateUrl: "__template_url",
  },
});
