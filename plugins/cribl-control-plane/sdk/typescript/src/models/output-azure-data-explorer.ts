import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalField1Schema, type AdditionalField1 } from "./additional-field1.js";
import { authenticationMethod54Schema, type AuthenticationMethod54 } from "./authentication-method54.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { certificate1Schema, type Certificate1 } from "./certificate1.js";
import { compressionLevelSchema, type CompressionLevel } from "./compression-level.js";
import { compressionSchema, type Compression } from "./compression.js";
import { compression104Schema, type Compression104 } from "./compression104.js";
import { dataFormatSchema, type DataFormat } from "./data-format.js";
import { dataPageVersionSchema, type DataPageVersion } from "./data-page-version.js";
import { diskSpaceProtectionSchema, type DiskSpaceProtection } from "./disk-space-protection.js";
import {
  enforceUniquenessViaTagValueSchema,
  type EnforceUniquenessViaTagValue,
} from "./enforce-uniqueness-via-tag-value.js";
import { extentTagSchema, type ExtentTag } from "./extent-tag.js";
import { ingestionModeSchema, type IngestionMode } from "./ingestion-mode.js";
import {
  keyValueMetadataConfOutputFilesystemSchema,
  type KeyValueMetadataConfOutputFilesystem,
} from "./key-value-metadata-conf-output-filesystem.js";
import {
  microsoftEntraIdAuthenticationEndpointSchema,
  type MicrosoftEntraIdAuthenticationEndpoint,
} from "./microsoft-entra-id-authentication-endpoint.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { orphanFileRecoverySchema, type OrphanFileRecovery } from "./orphan-file-recovery.js";
import { parquetVersionSchema, type ParquetVersion } from "./parquet-version.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import { reportLevelSchema, type ReportLevel } from "./report-level.js";
import { reportMethodSchema, type ReportMethod } from "./report-method.js";
import {
  responseRetrySettingConfOutputWebhookSchema,
  type ResponseRetrySettingConfOutputWebhook,
} from "./response-retry-setting-conf-output-webhook.js";
import { retrySettingsTypeSchema, type RetrySettingsType } from "./retry-settings-type.js";
import {
  timeoutRetrySettingsTypeSchema,
  type TimeoutRetrySettingsType,
} from "./timeout-retry-settings-type.js";

export type OutputAzureDataExplorer = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "azure_data_explorer" */
  type?: "azure_data_explorer";
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
  /** The base URI for your cluster. Typically, `https://<cluster>.<region>.kusto.windows.net`. */
  clusterUrl: string;
  /** Name of the database containing the table where data will be ingested */
  database: string;
  /** Name of the table to ingest data into */
  table: string;
  /**
   * When saving or starting the Destination, validate the database name and credentials; also
   * validate table name, except when creating a new table. Disable if your Azure app does not have
   * both the Database Viewer and the Table Viewer role.
   */
  validateDatabaseSettings?: boolean;
  /** Ingestion mode */
  ingestMode?: IngestionMode;
  /** Endpoint used to acquire authentication tokens from Azure */
  oauthEndpoint: MicrosoftEntraIdAuthenticationEndpoint;
  /** Directory ID (tenant identifier) in Azure Active Directory */
  tenantId: string;
  /** client_id to pass in the OAuth request parameter */
  clientId: string;
  /** Scope to pass in the OAuth request parameter */
  scope: string;
  /** The type of OAuth 2.0 client credentials grant flow to use */
  oauthType: AuthenticationMethod54;
  /** Optional description for this configuration. */
  description?: string;
  /** The client secret that you generated for your app in the Azure portal */
  clientSecret?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** Certificate credentials for OAuth authentication. */
  certificate?: Certificate1;
  /** Format of the output data */
  format?: DataFormat;
  /** Data compression format to apply to HTTP content before it is delivered */
  compress: Compression104;
  /** Compression level to apply before moving files to final destination */
  compressionLevel?: CompressionLevel;
  /** Automatically calculate the schema based on the events of each Parquet file generated */
  automaticSchema?: boolean;
  /** To add a new schema, navigate to Processing > Knowledge > Parquet Schemas */
  parquetSchema?: string;
  /** Determines which data types are supported and how they are represented */
  parquetVersion?: ParquetVersion;
  /**
   * Serialization format of data pages. Note that some reader implementations use Data page V2's
   * attributes to work more efficiently, while others ignore it.
   */
  parquetDataPageVersion?: DataPageVersion;
  /**
   * The number of rows that every group will contain. The final group can contain a smaller number
   * of rows.
   */
  parquetRowGroupLength?: number;
  /**
   * Target memory size for page segments, such as 1MB or 128MB. Generally, lower values improve
   * reading speed, while higher values improve compression.
   */
  parquetPageSize?: string;
  /** Log up to 3 rows that \@{product} skips due to data mismatch */
  shouldLogInvalidRows?: boolean;
  /**
   * The metadata of files the Destination writes will include the properties you add here as
   * key-value pairs. Useful for tagging. Examples: "key":"OCSF Event Class", "value":"9001"
   */
  keyValueMetadata?: KeyValueMetadataConfOutputFilesystem[];
  /**
   * Statistics profile an entire file in terms of minimum/maximum values within data, numbers of
   * nulls, etc. You can use Parquet tools to view statistics.
   */
  enableStatistics?: boolean;
  /**
   * One page index contains statistics for one data page. Parquet readers use statistics to enable
   * page skipping.
   */
  enableWritePageIndex?: boolean;
  /** Parquet tools can use the checksum of a Parquet page to verify data integrity */
  enablePageChecksum?: boolean;
  /** Remove empty staging directories after moving files */
  removeEmptyDirs?: boolean;
  /** How frequently, in seconds, to clean up empty directories */
  emptyDirCleanupSec?: number;
  /**
   * Number of directories to process in each batch during cleanup of empty directories. Minimum is
   * 10, maximum is 10000. Higher values may require more memory.
   */
  directoryBatchSize?: number;
  /**
   * If a file fails to move to its final destination after the maximum number of retries, move it
   * to a designated directory to prevent further errors
   */
  deadletterEnabled?: boolean;
  /**
   * Storage location for files that fail to reach their final destination after maximum retries are
   * exceeded
   */
  deadletterPath?: string;
  /**
   * The maximum number of times a file will attempt to move to its final destination before being
   * dead-lettered
   */
  maxRetryNum?: number;
  /** Send a JSON mapping object instead of specifying an existing named data mapping */
  isMappingObj?: boolean;
  /** Enter a JSON object that defines your desired data mapping */
  mappingObj?: string;
  /**
   * Enter the name of a data mapping associated with your target table. Or, if incoming event and
   * target table fields match exactly, you can leave the field empty.
   */
  mappingRef?: string;
  /**
   * The ingestion service URI for your cluster. Typically,
   * `https://ingest-<cluster>.<region>.kusto.windows.net`.
   */
  ingestUrl?: string;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Filesystem location in which to buffer files before compressing and moving to final
   * destination. Use performant and stable storage.
   */
  stagePath?: string;
  /**
   * JavaScript expression to define the output filename suffix (can be constant). The `__format`
   * variable refers to the value of the `Data format` field (`json` or `raw`). The `__compression`
   * field refers to the kind of compression being used (`none` or `gzip`).
   */
  fileNameSuffix?: string;
  /**
   * Maximum uncompressed output file size. Files of this size will be closed and moved to final
   * output location.
   */
  maxFileSizeMb?: number;
  /**
   * Maximum amount of time to write to a file. Files open for longer than this will be closed and
   * moved to final output location.
   */
  maxFileOpenTimeSec?: number;
  /**
   * Maximum amount of time to keep inactive files open. Files open for longer than this will be
   * closed and moved to final output location.
   */
  maxFileIdleTimeSec?: number;
  /**
   * Maximum number of files to keep open concurrently. When exceeded, \@{product} will close the
   * oldest open files and move them to the final output location.
   */
  maxOpenFiles?: number;
  /** Maximum number of parts to upload in parallel per file */
  maxConcurrentFileParts?: number;
  /** How to handle events when disk space is below the global 'Min free disk space' limit */
  onDiskFullBackpressure?: DiskSpaceProtection;
  /** Add the Output ID value to staging location */
  addIdToStagePath?: boolean;
  /** Retry settings for failed file uploads. */
  retrySettings?: RetrySettingsType;
  /** Orphan file recovery */
  orphans?: OrphanFileRecovery;
  /** Amount of time, in seconds, to wait for a request to complete before canceling it */
  timeoutSec?: number;
  /** Bypass the data management service's aggregation mechanism */
  flushImmediately?: boolean;
  /** Prevent blob deletion after ingestion is complete */
  retainBlobOnSuccess?: boolean;
  /** Strings or tags associated with the extent (ingested data shard) */
  extentTags?: ExtentTag[];
  /**
   * Prevents duplicate ingestion by verifying whether an extent with the specified ingest-by tag
   * already exists
   */
  ingestIfNotExists?: EnforceUniquenessViaTagValue[];
  /** Level of ingestion status reporting. Defaults to FailuresOnly. */
  reportLevel?: ReportLevel;
  /** Target of the ingestion status reporting. Defaults to Queue. */
  reportMethod?: ReportMethod;
  /** Optionally, enter additional configuration properties to send to the ingestion service */
  additionalProperties?: AdditionalField1[];
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
  /** Maximum number of ongoing requests before blocking */
  concurrency?: number;
  /** Maximum size, in KB, of the request body */
  maxPayloadSizeKb?: number;
  /** Maximum number of events to include in the request body. Default is 0 (unlimited). */
  maxPayloadEvents?: number;
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
  /** Disable to close the connection immediately after sending the outgoing request */
  keepAlive?: boolean;
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
   * Binds 'clusterUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clusterUrl' at
   * runtime.
   */
  templateClusterUrl?: string;
  /**
   * Binds 'database' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'database' at runtime.
   */
  templateDatabase?: string;
  /**
   * Binds 'table' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'table' at runtime.
   */
  templateTable?: string;
  /**
   * Binds 'oauthEndpoint' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'oauthEndpoint' at runtime.
   */
  templateOauthEndpoint?: string;
  /**
   * Binds 'tenantId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tenantId' at runtime.
   */
  templateTenantId?: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
  /**
   * Binds 'scope' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'scope' at runtime.
   */
  templateScope?: string;
  /**
   * Binds 'clientSecret' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'clientSecret' at runtime.
   */
  templateClientSecret?: string;
  /**
   * Binds 'format' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'format' at runtime.
   */
  templateFormat?: string;
  /**
   * Binds 'compress' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'compress' at runtime.
   */
  templateCompress?: string;
  /**
   * Binds 'parquetSchema' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'parquetSchema' at runtime.
   */
  templateParquetSchema?: string;
  /**
   * Binds 'mappingRef' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'mappingRef' at
   * runtime.
   */
  templateMappingRef?: string;
  /**
   * Binds 'ingestUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'ingestUrl' at
   * runtime.
   */
  templateIngestUrl?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
  /**
   * Binds 'fileNameSuffix' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'fileNameSuffix' at runtime.
   */
  templateFileNameSuffix?: string;
};

export const outputAzureDataExplorerSchema: Schema<OutputAzureDataExplorer> =
  s.object<OutputAzureDataExplorer>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("azure_data_explorer"), "azure_data_explorer"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
    clusterUrl: s.string(),
    database: s.string(),
    table: s.string(),
    validateDatabaseSettings: s.optional(s.boolean()),
    ingestMode: s.optional(s.lazy(() => ingestionModeSchema)),
    oauthEndpoint: microsoftEntraIdAuthenticationEndpointSchema,
    tenantId: s.string(),
    clientId: s.string(),
    scope: s.string(),
    oauthType: authenticationMethod54Schema,
    description: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    textSecret: s.optional(s.string()),
    certificate: s.optional(s.lazy(() => certificate1Schema)),
    format: s.optional(s.lazy(() => dataFormatSchema)),
    compress: compression104Schema,
    compressionLevel: s.optional(s.lazy(() => compressionLevelSchema)),
    automaticSchema: s.optional(s.boolean()),
    parquetSchema: s.optional(s.string()),
    parquetVersion: s.optional(s.lazy(() => parquetVersionSchema)),
    parquetDataPageVersion: s.optional(s.lazy(() => dataPageVersionSchema)),
    parquetRowGroupLength: s.optional(s.float64()),
    parquetPageSize: s.optional(s.string()),
    shouldLogInvalidRows: s.optional(s.boolean()),
    keyValueMetadata: s.optional(s.array(s.lazy(() => keyValueMetadataConfOutputFilesystemSchema))),
    enableStatistics: s.optional(s.boolean()),
    enableWritePageIndex: s.optional(s.boolean()),
    enablePageChecksum: s.optional(s.boolean()),
    removeEmptyDirs: s.optional(s.boolean()),
    emptyDirCleanupSec: s.optional(s.float64()),
    directoryBatchSize: s.optional(s.float64()),
    deadletterEnabled: s.optional(s.boolean()),
    deadletterPath: s.optional(s.string()),
    maxRetryNum: s.optional(s.float64()),
    isMappingObj: s.optional(s.boolean()),
    mappingObj: s.optional(s.string()),
    mappingRef: s.optional(s.string()),
    ingestUrl: s.optional(s.string()),
    onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
    stagePath: s.optional(s.string()),
    fileNameSuffix: s.optional(s.string()),
    maxFileSizeMb: s.optional(s.float64()),
    maxFileOpenTimeSec: s.optional(s.float64()),
    maxFileIdleTimeSec: s.optional(s.float64()),
    maxOpenFiles: s.optional(s.float64()),
    maxConcurrentFileParts: s.optional(s.float64()),
    onDiskFullBackpressure: s.optional(s.lazy(() => diskSpaceProtectionSchema)),
    addIdToStagePath: s.optional(s.boolean()),
    retrySettings: s.optional(s.lazy(() => retrySettingsTypeSchema)),
    orphans: s.optional(s.lazy(() => orphanFileRecoverySchema)),
    timeoutSec: s.optional(s.float64()),
    flushImmediately: s.optional(s.boolean()),
    retainBlobOnSuccess: s.optional(s.boolean()),
    extentTags: s.optional(s.array(s.lazy(() => extentTagSchema))),
    ingestIfNotExists: s.optional(s.array(s.lazy(() => enforceUniquenessViaTagValueSchema))),
    reportLevel: s.optional(s.lazy(() => reportLevelSchema)),
    reportMethod: s.optional(s.lazy(() => reportMethodSchema)),
    additionalProperties: s.optional(s.array(s.lazy(() => additionalField1Schema))),
    responseRetrySettings: s.optional(s.array(s.lazy(() => responseRetrySettingConfOutputWebhookSchema))),
    timeoutRetrySettings: s.optional(s.lazy(() => timeoutRetrySettingsTypeSchema)),
    responseHonorRetryAfterHeader: s.optional(s.boolean()),
    concurrency: s.optional(s.float64()),
    maxPayloadSizeKb: s.optional(s.float64()),
    maxPayloadEvents: s.optional(s.float64()),
    maxConnectionReuseSec: s.optional(s.float64()),
    flushPeriodSec: s.optional(s.float64()),
    rejectUnauthorized: s.optional(s.boolean()),
    useRoundRobinDns: s.optional(s.boolean()),
    keepAlive: s.optional(s.boolean()),
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
    templateClusterUrl: s.optional(s.string()),
    templateDatabase: s.optional(s.string()),
    templateTable: s.optional(s.string()),
    templateOauthEndpoint: s.optional(s.string()),
    templateTenantId: s.optional(s.string()),
    templateClientId: s.optional(s.string()),
    templateScope: s.optional(s.string()),
    templateClientSecret: s.optional(s.string()),
    templateFormat: s.optional(s.string()),
    templateCompress: s.optional(s.string()),
    templateParquetSchema: s.optional(s.string()),
    templateMappingRef: s.optional(s.string()),
    templateIngestUrl: s.optional(s.string()),
    templateOnBackpressure: s.optional(s.string()),
    templateFileNameSuffix: s.optional(s.string()),
    _keysMap: {
      maxFileSizeMb: "maxFileSizeMB",
      maxPayloadSizeKb: "maxPayloadSizeKB",
      templateStreamtags: "__template_streamtags",
      templateClusterUrl: "__template_clusterUrl",
      templateDatabase: "__template_database",
      templateTable: "__template_table",
      templateOauthEndpoint: "__template_oauthEndpoint",
      templateTenantId: "__template_tenantId",
      templateClientId: "__template_clientId",
      templateScope: "__template_scope",
      templateClientSecret: "__template_clientSecret",
      templateFormat: "__template_format",
      templateCompress: "__template_compress",
      templateParquetSchema: "__template_parquetSchema",
      templateMappingRef: "__template_mappingRef",
      templateIngestUrl: "__template_ingestUrl",
      templateOnBackpressure: "__template_onBackpressure",
      templateFileNameSuffix: "__template_fileNameSuffix",
    },
  });
