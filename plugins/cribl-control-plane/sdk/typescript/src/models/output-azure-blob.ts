import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod93Schema, type AuthenticationMethod93 } from "./authentication-method93.js";
import { backpressureBehavior81Schema, type BackpressureBehavior81 } from "./backpressure-behavior81.js";
import { blobAccessTierSchema, type BlobAccessTier } from "./blob-access-tier.js";
import { certificateTypeSchema, type CertificateType } from "./certificate-type.js";
import { compressionLevelSchema, type CompressionLevel } from "./compression-level.js";
import { compression104Schema, type Compression104 } from "./compression104.js";
import { dataFormatSchema, type DataFormat } from "./data-format.js";
import { dataPageVersionSchema, type DataPageVersion } from "./data-page-version.js";
import { diskSpaceProtectionSchema, type DiskSpaceProtection } from "./disk-space-protection.js";
import {
  keyValueMetadataConfOutputFilesystemSchema,
  type KeyValueMetadataConfOutputFilesystem,
} from "./key-value-metadata-conf-output-filesystem.js";
import { orphanFileRecoverySchema, type OrphanFileRecovery } from "./orphan-file-recovery.js";
import { parquetVersionSchema, type ParquetVersion } from "./parquet-version.js";
import { retrySettingsTypeSchema, type RetrySettingsType } from "./retry-settings-type.js";

export type OutputAzureBlob = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "azure_blob" */
  type?: "azure_blob";
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
   * The Azure Blob Storage container name. Name can include only lowercase letters, numbers, and
   * hyphens. For dynamic container names, enter a JavaScript expression within quotes or backticks,
   * to be evaluated at initialization. The expression can evaluate to a constant value and can
   * reference Global Variables, such as `myContainer-${C.env["CRIBL_WORKER_ID"]}`.
   */
  containerName: string;
  /** Create the configured container in Azure Blob Storage if it does not already exist */
  createContainer?: boolean;
  /**
   * Root directory prepended to path before uploading. Value can be a JavaScript expression
   * enclosed in quotes or backticks, to be evaluated at initialization. The expression can evaluate
   * to a constant value and can reference Global Variables, such as
   * `myBlobPrefix-${C.env["CRIBL_WORKER_ID"]}`.
   */
  destPath?: string;
  /**
   * Filesystem location in which to buffer files before compressing and moving to final
   * destination. Use performant and stable storage.
   */
  stagePath: string;
  /** Add the Output ID value to staging location */
  addIdToStagePath?: boolean;
  /** Maximum number of parts to upload in parallel per file */
  maxConcurrentFileParts?: number;
  /** Remove empty staging directories after moving files */
  removeEmptyDirs?: boolean;
  /**
   * JavaScript expression defining how files are partitioned and organized. Default is date-based.
   * If blank, Stream will fall back to the event's __partition field value – if present – otherwise
   * to each location's root directory.
   */
  partitionExpr?: string;
  /** Format of the output data */
  format?: DataFormat;
  /** JavaScript expression to define the output filename prefix (can be constant) */
  baseFileName?: string;
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
  /** If set, this line will be written to the beginning of each output file */
  headerLine?: string;
  /** Buffer size used to write to a file */
  writeHighWaterMark?: number;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior81;
  /**
   * If a file fails to move to its final destination after the maximum number of retries, move it
   * to a designated directory to prevent further errors
   */
  deadletterEnabled?: boolean;
  /** How to handle events when disk space is below the global 'Min free disk space' limit */
  onDiskFullBackpressure?: DiskSpaceProtection;
  /**
   * Force all staged files to close during an orderly Node shutdown. This triggers immediate upload
   * of in-progress data — regardless of idle time, file age, or size thresholds — to minimize data
   * loss.
   */
  forceCloseOnShutdown?: boolean;
  /** Retry settings for failed file uploads. */
  retrySettings?: RetrySettingsType;
  /** Orphan file recovery */
  orphans?: OrphanFileRecovery;
  /** Authentication method */
  authType?: AuthenticationMethod93;
  /** Blob access tier */
  storageClass?: BlobAccessTier;
  /** Optional description for this configuration. */
  description?: string;
  /** Data compression format to apply to HTTP content before it is delivered */
  compress?: Compression104;
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
  /** How frequently, in seconds, to clean up empty directories */
  emptyDirCleanupSec?: number;
  /**
   * Number of directories to process in each batch during cleanup of empty directories. Minimum is
   * 10, maximum is 10000. Higher values may require more memory.
   */
  directoryBatchSize?: number;
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
  /**
   * Enter your Azure Storage account connection string. If left blank, Stream will fall back to
   * env.AZURE_STORAGE_CONNECTION_STRING.
   */
  connectionString?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** The name of your Azure storage account */
  storageAccountName?: string;
  /** The service principal's tenant ID */
  tenantId?: string;
  /** The service principal's client ID */
  clientId?: string;
  /** The Azure cloud to use. Defaults to Azure Public Cloud. */
  azureCloud?: string;
  /**
   * Endpoint suffix for the service URL. Takes precedence over the Azure Cloud setting. Defaults to
   * core.windows.net.
   */
  endpointSuffix?: string;
  /** Select or create a stored text secret */
  clientTextSecret?: string;
  /** Certificate credentials for the Azure service principal. */
  certificate?: CertificateType;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'containerName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'containerName' at runtime.
   */
  templateContainerName?: string;
  /**
   * Binds 'destPath' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'destPath' at runtime.
   */
  templateDestPath?: string;
  /**
   * Binds 'partitionExpr' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'partitionExpr' at runtime.
   */
  templatePartitionExpr?: string;
  /**
   * Binds 'format' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'format' at runtime.
   */
  templateFormat?: string;
  /**
   * Binds 'baseFileName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'baseFileName' at runtime.
   */
  templateBaseFileName?: string;
  /**
   * Binds 'fileNameSuffix' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'fileNameSuffix' at runtime.
   */
  templateFileNameSuffix?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
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
   * Binds 'connectionString' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'connectionString' at runtime.
   */
  templateConnectionString?: string;
  /**
   * Binds 'storageAccountName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'storageAccountName' at runtime.
   */
  templateStorageAccountName?: string;
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
   * Binds 'azureCloud' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'azureCloud' at
   * runtime.
   */
  templateAzureCloud?: string;
};

export const outputAzureBlobSchema: Schema<OutputAzureBlob> = s.object<OutputAzureBlob>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("azure_blob"), "azure_blob"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  containerName: s.string(),
  createContainer: s.optional(s.boolean()),
  destPath: s.optional(s.string()),
  stagePath: s.string(),
  addIdToStagePath: s.optional(s.boolean()),
  maxConcurrentFileParts: s.optional(s.float64()),
  removeEmptyDirs: s.optional(s.boolean()),
  partitionExpr: s.optional(s.string()),
  format: s.optional(s.lazy(() => dataFormatSchema)),
  baseFileName: s.optional(s.string()),
  fileNameSuffix: s.optional(s.string()),
  maxFileSizeMb: s.optional(s.float64()),
  maxFileOpenTimeSec: s.optional(s.float64()),
  maxFileIdleTimeSec: s.optional(s.float64()),
  maxOpenFiles: s.optional(s.float64()),
  headerLine: s.optional(s.string()),
  writeHighWaterMark: s.optional(s.float64()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehavior81Schema)),
  deadletterEnabled: s.optional(s.boolean()),
  onDiskFullBackpressure: s.optional(s.lazy(() => diskSpaceProtectionSchema)),
  forceCloseOnShutdown: s.optional(s.boolean()),
  retrySettings: s.optional(s.lazy(() => retrySettingsTypeSchema)),
  orphans: s.optional(s.lazy(() => orphanFileRecoverySchema)),
  authType: s.optional(s.lazy(() => authenticationMethod93Schema)),
  storageClass: s.optional(s.lazy(() => blobAccessTierSchema)),
  description: s.optional(s.string()),
  compress: s.optional(s.lazy(() => compression104Schema)),
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
  emptyDirCleanupSec: s.optional(s.float64()),
  directoryBatchSize: s.optional(s.float64()),
  deadletterPath: s.optional(s.string()),
  maxRetryNum: s.optional(s.float64()),
  connectionString: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  storageAccountName: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  clientId: s.optional(s.string()),
  azureCloud: s.optional(s.string()),
  endpointSuffix: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  certificate: s.optional(s.lazy(() => certificateTypeSchema)),
  templateStreamtags: s.optional(s.string()),
  templateContainerName: s.optional(s.string()),
  templateDestPath: s.optional(s.string()),
  templatePartitionExpr: s.optional(s.string()),
  templateFormat: s.optional(s.string()),
  templateBaseFileName: s.optional(s.string()),
  templateFileNameSuffix: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateCompress: s.optional(s.string()),
  templateParquetSchema: s.optional(s.string()),
  templateConnectionString: s.optional(s.string()),
  templateStorageAccountName: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateAzureCloud: s.optional(s.string()),
  _keysMap: {
    maxFileSizeMb: "maxFileSizeMB",
    templateStreamtags: "__template_streamtags",
    templateContainerName: "__template_containerName",
    templateDestPath: "__template_destPath",
    templatePartitionExpr: "__template_partitionExpr",
    templateFormat: "__template_format",
    templateBaseFileName: "__template_baseFileName",
    templateFileNameSuffix: "__template_fileNameSuffix",
    templateOnBackpressure: "__template_onBackpressure",
    templateCompress: "__template_compress",
    templateParquetSchema: "__template_parquetSchema",
    templateConnectionString: "__template_connectionString",
    templateStorageAccountName: "__template_storageAccountName",
    templateTenantId: "__template_tenantId",
    templateClientId: "__template_clientId",
    templateAzureCloud: "__template_azureCloud",
  },
});
