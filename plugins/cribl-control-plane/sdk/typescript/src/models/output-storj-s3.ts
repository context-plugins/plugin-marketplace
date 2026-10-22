import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod103Schema, type AuthenticationMethod103 } from "./authentication-method103.js";
import { backpressureBehavior81Schema, type BackpressureBehavior81 } from "./backpressure-behavior81.js";
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

export type OutputStorjS3 = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "storj_s3" */
  type?: "storj_s3";
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
  /** Authentication method. */
  awsAuthenticationMethod?: AuthenticationMethod103;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /**
   * Name of the destination Storj bucket. Must be a JavaScript expression (which can evaluate to a
   * constant value), enclosed in quotes or backticks. Can be evaluated only at initialization time.
   * Example referencing a Global Variable: `myBucket-${C.vars.myVar}`
   */
  bucket: string;
  /**
   * Prefix to prepend to files before uploading. Must be a JavaScript expression (which can
   * evaluate to a constant value), enclosed in quotes or backticks. Can be evaluated only at init
   * time. Example referencing a Global Variable: `myKeyPrefix-${C.vars.myVar}`
   */
  destPath?: string;
  /** Maximum number of parts to upload in parallel per file. Minimum part size is 5MB. */
  maxConcurrentFileParts?: number;
  /** Disable if you can access files within the bucket but not the bucket itself */
  verifyPermissions?: boolean;
  /** Maximum number of files that can be waiting for upload before backpressure is applied */
  maxClosingFilesToBackpressure?: number;
  /**
   * Filesystem location in which to buffer files, before compressing and moving to final
   * destination. Use performant and stable storage.
   */
  stagePath: string;
  /** Add the Output ID value to staging location */
  addIdToStagePath?: boolean;
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
  /** Storj S3-compatible gateway endpoint URL (example: https://gateway.storjshare.io) */
  endpoint: string;
  /** Optional description for this configuration. */
  description?: string;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
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
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'bucket' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'bucket' at runtime.
   */
  templateBucket?: string;
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
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
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
};

export const outputStorjS3Schema: Schema<OutputStorjS3> = s.object<OutputStorjS3>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("storj_s3"), "storj_s3"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethod103Schema)),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  bucket: s.string(),
  destPath: s.optional(s.string()),
  maxConcurrentFileParts: s.optional(s.float64()),
  verifyPermissions: s.optional(s.boolean()),
  maxClosingFilesToBackpressure: s.optional(s.float64()),
  stagePath: s.string(),
  addIdToStagePath: s.optional(s.boolean()),
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
  endpoint: s.string(),
  description: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
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
  templateStreamtags: s.optional(s.string()),
  templateBucket: s.optional(s.string()),
  templateDestPath: s.optional(s.string()),
  templatePartitionExpr: s.optional(s.string()),
  templateFormat: s.optional(s.string()),
  templateBaseFileName: s.optional(s.string()),
  templateFileNameSuffix: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateCompress: s.optional(s.string()),
  templateParquetSchema: s.optional(s.string()),
  _keysMap: {
    maxFileSizeMb: "maxFileSizeMB",
    templateStreamtags: "__template_streamtags",
    templateBucket: "__template_bucket",
    templateDestPath: "__template_destPath",
    templatePartitionExpr: "__template_partitionExpr",
    templateFormat: "__template_format",
    templateBaseFileName: "__template_baseFileName",
    templateFileNameSuffix: "__template_fileNameSuffix",
    templateOnBackpressure: "__template_onBackpressure",
    templateEndpoint: "__template_endpoint",
    templateCompress: "__template_compress",
    templateParquetSchema: "__template_parquetSchema",
  },
});
