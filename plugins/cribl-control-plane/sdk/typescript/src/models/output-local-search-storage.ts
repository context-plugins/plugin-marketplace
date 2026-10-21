import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType23Schema, type AuthenticationType23 } from "./authentication-type23.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { columnMappingSchema, type ColumnMapping } from "./column-mapping.js";
import { compressionSchema, type Compression } from "./compression.js";
import {
  exceptionRetrySettingConfOutputLocalSearchStorageSchema,
  type ExceptionRetrySettingConfOutputLocalSearchStorage,
} from "./exception-retry-setting-conf-output-local-search-storage.js";
import {
  extraHttpHeaderConfInputElasticSchema,
  type ExtraHttpHeaderConfInputElastic,
} from "./extra-http-header-conf-input-elastic.js";
import {
  failedRequestLoggingModeSchema,
  type FailedRequestLoggingMode,
} from "./failed-request-logging-mode.js";
import { format9Schema, type Format9 } from "./format9.js";
import { mappingType2Schema, type MappingType2 } from "./mapping-type2.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import { statsDestinationSchema, type StatsDestination } from "./stats-destination.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";
import { tlsSettingsClientSide34Schema, type TlsSettingsClientSide34 } from "./tls-settings-client-side34.js";

export type OutputLocalSearchStorage = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "local_search_storage" */
  type?: "local_search_storage";
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
  /** URL of the database instance. Example: http://localhost:8123/ */
  url: string;
  /** Authentication type */
  authType?: AuthenticationType23;
  /** Database */
  database: string;
  /**
   * Name of the table where data will be inserted. Name can contain letters (A-Z, a-z), numbers
   * (0-9), and the character "_", and must start with either a letter or the character "_".
   */
  tableName: string;
  /** Data format to use when sending data. Defaults to JSON Compact. */
  format?: Format9;
  /** How event fields are mapped to columns. */
  mappingType?: MappingType2;
  /** Collect data into batches for later processing. Disable to write to a table immediately. */
  asyncInserts?: boolean;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide34;
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
   * Optional ClickHouse workload name to append as a SETTINGS clause on INSERT queries. Used for
   * workload scheduling classification.
   */
  workload?: string;
  /** Log the most recent event that fails to match the table schema */
  dumpFormatErrorsToDisk?: boolean;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Retry automatically when ClickHouse reports a matching exception code, such as 241 (memory
   * limit exceeded) or 202 (too many simultaneous queries). These settings take precedence over
   * Settings for failed HTTP requests.
   */
  exceptionRetrySettings?: ExceptionRetrySettingConfOutputLocalSearchStorage[];
  /** Internal destination settings for batch metadata and statistics. */
  statsDestination?: StatsDestination;
  /** Optional description for this configuration. */
  description?: string;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** Username for certificate authentication */
  sqlUsername?: string;
  /**
   * Cribl will wait for confirmation that data has been fully inserted into the database before
   * proceeding. Disabling this option can increase throughput, but Cribl won't be able to verify
   * data has been completely inserted.
   */
  waitForAsyncInserts?: boolean;
  /** Fields to exclude from sending */
  excludeMappingFields?: string[];
  /** Retrieves the table schema and populates the Column Mapping table */
  describeTable?: string;
  /** Column Mapping */
  columnMappings?: ColumnMapping[];
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
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
  /**
   * Binds 'database' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'database' at runtime.
   */
  templateDatabase?: string;
  /**
   * Binds 'tableName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tableName' at
   * runtime.
   */
  templateTableName?: string;
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

export const outputLocalSearchStorageSchema: Schema<OutputLocalSearchStorage> =
  s.object<OutputLocalSearchStorage>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("local_search_storage"), "local_search_storage"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
    url: s.string(),
    authType: s.optional(s.lazy(() => authenticationType23Schema)),
    database: s.string(),
    tableName: s.string(),
    format: s.optional(s.lazy(() => format9Schema)),
    mappingType: s.optional(s.lazy(() => mappingType2Schema)),
    asyncInserts: s.optional(s.boolean()),
    tls: s.optional(s.lazy(() => tlsSettingsClientSide34Schema)),
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
    workload: s.optional(s.string()),
    dumpFormatErrorsToDisk: s.optional(s.boolean()),
    onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
    exceptionRetrySettings: s.optional(
      s.array(s.lazy(() => exceptionRetrySettingConfOutputLocalSearchStorageSchema)),
    ),
    statsDestination: s.optional(s.lazy(() => statsDestinationSchema)),
    description: s.optional(s.string()),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    credentialsSecret: s.optional(s.string()),
    sqlUsername: s.optional(s.string()),
    waitForAsyncInserts: s.optional(s.boolean()),
    excludeMappingFields: s.optional(s.array(s.string())),
    describeTable: s.optional(s.string()),
    columnMappings: s.optional(s.array(s.lazy(() => columnMappingSchema))),
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
    templateUrl: s.optional(s.string()),
    templateDatabase: s.optional(s.string()),
    templateTableName: s.optional(s.string()),
    templateFailedRequestLoggingMode: s.optional(s.string()),
    templateOnBackpressure: s.optional(s.string()),
    _keysMap: {
      maxPayloadSizeKb: "maxPayloadSizeKB",
      templateStreamtags: "__template_streamtags",
      templateUrl: "__template_url",
      templateDatabase: "__template_database",
      templateTableName: "__template_tableName",
      templateFailedRequestLoggingMode: "__template_failedRequestLoggingMode",
      templateOnBackpressure: "__template_onBackpressure",
    },
  });
