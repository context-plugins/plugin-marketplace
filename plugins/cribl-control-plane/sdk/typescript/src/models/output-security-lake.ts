import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { backpressureBehavior81Schema, type BackpressureBehavior81 } from "./backpressure-behavior81.js";
import { dataPageVersionSchema, type DataPageVersion } from "./data-page-version.js";
import { diskSpaceProtectionSchema, type DiskSpaceProtection } from "./disk-space-protection.js";
import {
  keyValueMetadataConfOutputFilesystemSchema,
  type KeyValueMetadataConfOutputFilesystem,
} from "./key-value-metadata-conf-output-filesystem.js";
import { objectAclSchema, type ObjectAcl } from "./object-acl.js";
import { orphanFileRecoverySchema, type OrphanFileRecovery } from "./orphan-file-recovery.js";
import { parquetVersionSchema, type ParquetVersion } from "./parquet-version.js";
import { retrySettingsTypeSchema, type RetrySettingsType } from "./retry-settings-type.js";
import {
  serverSideEncryptionForUploadedObjectsSchema,
  type ServerSideEncryptionForUploadedObjects,
} from "./server-side-encryption-for-uploaded-objects.js";
import { storageClassSchema, type StorageClass } from "./storage-class.js";

export type OutputSecurityLake = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "security_lake" */
  type?: "security_lake";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /**
   * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. These fields are
   * added as dimensions and labels to generated metrics and logs, respectively.
   */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * Amazon Security Lake service endpoint. If empty, defaults to the AWS Region-specific endpoint.
   * Otherwise, it must point to Amazon Security Lake-compatible endpoint.
   */
  endpoint?: string;
  /** Use Assume Role credentials to access S3 */
  enableAssumeRole?: boolean;
  /** Amazon Resource Name (ARN) of the role to assume */
  assumeRoleArn: string;
  /** External ID to use when assuming role */
  assumeRoleExternalId?: string;
  /**
   * Duration of the assumed role's session, in seconds. Minimum is 900 (15 minutes), default is
   * 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  durationSeconds?: number;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /**
   * Name of the destination S3 bucket. Must be a JavaScript expression (which can evaluate to a
   * constant value), enclosed in quotes or backticks. Can be evaluated only at initialization time.
   * Example referencing a Global Variable: `myBucket-${C.vars.myVar}`
   */
  bucket: string;
  /** Region where the Amazon Security Lake is located. */
  region: string;
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
  /** JavaScript expression to define the output filename prefix (can be constant) */
  baseFileName?: string;
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
  /** Secret key */
  awsSecretKey?: string;
  /** Object ACL to assign to uploaded objects */
  objectAcl?: ObjectAcl;
  /** Storage class to select for uploaded objects */
  storageClass?: StorageClass;
  /** Server-side encryption to use for uploaded objects */
  serverSideEncryption?: ServerSideEncryptionForUploadedObjects;
  /** ID or ARN of the KMS customer-managed key to use for encryption */
  kmsKeyId?: string;
  /**
   * ID of the AWS account whose data the Destination will write to Security Lake. This should have
   * been configured when creating the Amazon Security Lake custom source.
   */
  accountId: string;
  /** Name of the custom source configured in Amazon Security Lake */
  customSource: string;
  /** Automatically calculate the schema based on the events of each Parquet file generated */
  automaticSchema?: boolean;
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
  /** Optional description for this configuration. */
  description?: string;
  /** This value can be a constant or a JavaScript expression (`${C.env.SOME_ACCESS_KEY}`) */
  awsApiKey?: string;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
  /** How frequently, in seconds, to clean up empty directories */
  emptyDirCleanupSec?: number;
  /**
   * Number of directories to process in each batch during cleanup of empty directories. Minimum is
   * 10, maximum is 10000. Higher values may require more memory.
   */
  directoryBatchSize?: number;
  /** To add a new schema, navigate to Processing > Knowledge > Parquet Schemas */
  parquetSchema?: string;
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
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
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
  /**
   * Binds 'bucket' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'bucket' at runtime.
   */
  templateBucket?: string;
  /**
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
  /**
   * Binds 'baseFileName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'baseFileName' at runtime.
   */
  templateBaseFileName?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
  /**
   * Binds 'awsSecretKey' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'awsSecretKey' at runtime.
   */
  templateAwsSecretKey?: string;
  /**
   * Binds 'objectACL' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'objectACL' at
   * runtime.
   */
  templateObjectAcl?: string;
  /**
   * Binds 'storageClass' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'storageClass' at runtime.
   */
  templateStorageClass?: string;
  /**
   * Binds 'serverSideEncryption' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'serverSideEncryption' at runtime.
   */
  templateServerSideEncryption?: string;
  /**
   * Binds 'kmsKeyId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'kmsKeyId' at runtime.
   */
  templateKmsKeyId?: string;
  /**
   * Binds 'accountId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'accountId' at
   * runtime.
   */
  templateAccountId?: string;
  /**
   * Binds 'customSource' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'customSource' at runtime.
   */
  templateCustomSource?: string;
  /**
   * Binds 'awsApiKey' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'awsApiKey' at
   * runtime.
   */
  templateAwsApiKey?: string;
  /**
   * Binds 'parquetSchema' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'parquetSchema' at runtime.
   */
  templateParquetSchema?: string;
};

export const outputSecurityLakeSchema: Schema<OutputSecurityLake> = s.object<OutputSecurityLake>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("security_lake"), "security_lake"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  endpoint: s.optional(s.string()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.string(),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  bucket: s.string(),
  region: s.string(),
  maxConcurrentFileParts: s.optional(s.float64()),
  verifyPermissions: s.optional(s.boolean()),
  maxClosingFilesToBackpressure: s.optional(s.float64()),
  stagePath: s.string(),
  addIdToStagePath: s.optional(s.boolean()),
  removeEmptyDirs: s.optional(s.boolean()),
  baseFileName: s.optional(s.string()),
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
  awsSecretKey: s.optional(s.string()),
  objectAcl: s.optional(s.lazy(() => objectAclSchema)),
  storageClass: s.optional(s.lazy(() => storageClassSchema)),
  serverSideEncryption: s.optional(s.lazy(() => serverSideEncryptionForUploadedObjectsSchema)),
  kmsKeyId: s.optional(s.string()),
  accountId: s.string(),
  customSource: s.string(),
  automaticSchema: s.optional(s.boolean()),
  parquetVersion: s.optional(s.lazy(() => parquetVersionSchema)),
  parquetDataPageVersion: s.optional(s.lazy(() => dataPageVersionSchema)),
  parquetRowGroupLength: s.optional(s.float64()),
  parquetPageSize: s.optional(s.string()),
  shouldLogInvalidRows: s.optional(s.boolean()),
  keyValueMetadata: s.optional(s.array(s.lazy(() => keyValueMetadataConfOutputFilesystemSchema))),
  enableStatistics: s.optional(s.boolean()),
  enableWritePageIndex: s.optional(s.boolean()),
  enablePageChecksum: s.optional(s.boolean()),
  description: s.optional(s.string()),
  awsApiKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
  emptyDirCleanupSec: s.optional(s.float64()),
  directoryBatchSize: s.optional(s.float64()),
  parquetSchema: s.optional(s.string()),
  deadletterPath: s.optional(s.string()),
  maxRetryNum: s.optional(s.float64()),
  templateStreamtags: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  templateBucket: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateBaseFileName: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateAwsSecretKey: s.optional(s.string()),
  templateObjectAcl: s.optional(s.string()),
  templateStorageClass: s.optional(s.string()),
  templateServerSideEncryption: s.optional(s.string()),
  templateKmsKeyId: s.optional(s.string()),
  templateAccountId: s.optional(s.string()),
  templateCustomSource: s.optional(s.string()),
  templateAwsApiKey: s.optional(s.string()),
  templateParquetSchema: s.optional(s.string()),
  _keysMap: {
    maxFileSizeMb: "maxFileSizeMB",
    objectAcl: "objectACL",
    templateStreamtags: "__template_streamtags",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
    templateBucket: "__template_bucket",
    templateRegion: "__template_region",
    templateBaseFileName: "__template_baseFileName",
    templateOnBackpressure: "__template_onBackpressure",
    templateAwsSecretKey: "__template_awsSecretKey",
    templateObjectAcl: "__template_objectACL",
    templateStorageClass: "__template_storageClass",
    templateServerSideEncryption: "__template_serverSideEncryption",
    templateKmsKeyId: "__template_kmsKeyId",
    templateAccountId: "__template_accountId",
    templateCustomSource: "__template_customSource",
    templateAwsApiKey: "__template_awsApiKey",
    templateParquetSchema: "__template_parquetSchema",
  },
});
