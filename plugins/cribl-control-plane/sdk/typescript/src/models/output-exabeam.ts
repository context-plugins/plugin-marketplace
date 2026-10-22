import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod60Schema, type AuthenticationMethod60 } from "./authentication-method60.js";
import { backpressureBehavior81Schema, type BackpressureBehavior81 } from "./backpressure-behavior81.js";
import { diskSpaceProtectionSchema, type DiskSpaceProtection } from "./disk-space-protection.js";
import { objectAcl10Schema, type ObjectAcl10 } from "./object-acl10.js";
import { orphanFileRecoverySchema, type OrphanFileRecovery } from "./orphan-file-recovery.js";
import { retrySettingsTypeSchema, type RetrySettingsType } from "./retry-settings-type.js";
import { storageClass9Schema, type StorageClass9 } from "./storage-class9.js";

export type OutputExabeam = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "exabeam" */
  type?: "exabeam";
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
   * Name of the destination bucket. A constant or a JavaScript expression that can only be
   * evaluated at init time. Example of referencing a JavaScript Global Variable:
   * `myBucket-${C.vars.myVar}`.
   */
  bucket: string;
  /** Region where the bucket is located */
  region: string;
  /**
   * Filesystem location in which to buffer files, before compressing and moving to final
   * destination. Use performant and stable storage.
   */
  stagePath: string;
  /** Google Cloud Storage service endpoint */
  endpoint: string;
  /** Object ACL to assign to uploaded objects */
  objectAcl?: ObjectAcl10;
  /** Storage class to select for uploaded objects */
  storageClass?: StorageClass9;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /** Add the Output ID value to staging location */
  addIdToStagePath?: boolean;
  /** Remove empty staging directories after moving files */
  removeEmptyDirs?: boolean;
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
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior81;
  /**
   * If a file fails to move to its final destination after the maximum number of retries, move it
   * to a designated directory to prevent further errors
   */
  deadletterEnabled?: boolean;
  /** How to handle events when disk space is below the global 'Min free disk space' limit */
  onDiskFullBackpressure?: DiskSpaceProtection;
  /** Retry settings for failed file uploads. */
  retrySettings?: RetrySettingsType;
  /** Orphan file recovery */
  orphans?: OrphanFileRecovery;
  /**
   * Maximum uncompressed output file size. Files of this size will be closed and moved to final
   * output location.
   */
  maxFileSizeMb?: number;
  /** Enter an encoded string containing Exabeam configurations */
  encodedConfiguration?: string;
  /**
   * ID of the Exabeam Collector where data should be sent. Example:
   * 11112222-3333-4444-5555-666677778888
   */
  collectorInstanceId: string;
  /** Authentication method */
  awsAuthenticationMethod?: AuthenticationMethod60;
  /**
   * Constant or JavaScript expression to create an Exabeam site name. Values that aren't
   * successfully evaluated will be treated as string constants.
   */
  siteName?: string;
  /** Exabeam site ID. If left blank, \@{product} will use the value of the Exabeam site name. */
  siteId?: string;
  /** Timezone offset */
  timezoneOffset?: string;
  /**
   * JavaScript expression for the host from which the log was ingested into the SIEM, evaluated per
   * event. Static values must be quoted or backticked (for example, 'collector-1.example.com');
   * unquoted text is evaluated as JavaScript, not as a literal. To reference an event field use an
   * expression, such as `${host}`. Emitted as the "hostname" metadata field; omitted when empty or
   * not a usable scalar.
   */
  hostname?: string;
  /**
   * JavaScript expression for the host that forwarded the log, evaluated per event. Static values
   * must be quoted or backticked (for example, 'fwd-1'); unquoted text is evaluated as JavaScript,
   * not as a literal. To reference an event field use an expression, such as `${__forwarder}`.
   * Emitted as the "forwarder" metadata field; omitted when empty or not a usable scalar.
   */
  forwarder?: string;
  /**
   * JavaScript expression that must resolve to an object describing the interim agent collector,
   * such as {hostname: origin_host, '@timestamp': _time, path: source}. Evaluated per event.
   * Unquoted text is evaluated as JavaScript, not as a literal. Emitted as the "origin" metadata
   * field; omitted when the result is not a non-empty object.
   */
  origin?: string;
  /**
   * JavaScript expression that must resolve to an object of custom metadata key/value pairs
   * (searchable in Exabeam as m_c_logtags_<name>). Assemble the object upstream and reference it
   * here (example: __exabeam_logtags), or build it inline (example: {department: dept, servertype:
   * stype}). Evaluated per event. Unquoted text is evaluated as JavaScript, not as a literal.
   * Emitted as the "logtags" metadata field; omitted when the result is not a non-empty object.
   */
  logtags?: string;
  /**
   * HMAC access key. Can be a constant or a JavaScript expression, such as
   * `${C.env.GCS_ACCESS_KEY}`.
   */
  awsApiKey?: string;
  /** HMAC secret. Can be a constant or a JavaScript expression, such as `${C.env.GCS_SECRET}`. */
  awsSecretKey?: string;
  /** Optional description for this configuration. */
  description?: string;
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
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
  /**
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
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
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputExabeamSchema: Schema<OutputExabeam> = s.object<OutputExabeam>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("exabeam"), "exabeam"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  bucket: s.string(),
  region: s.string(),
  stagePath: s.string(),
  endpoint: s.string(),
  objectAcl: s.optional(s.lazy(() => objectAcl10Schema)),
  storageClass: s.optional(s.lazy(() => storageClass9Schema)),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  addIdToStagePath: s.optional(s.boolean()),
  removeEmptyDirs: s.optional(s.boolean()),
  maxFileOpenTimeSec: s.optional(s.float64()),
  maxFileIdleTimeSec: s.optional(s.float64()),
  maxOpenFiles: s.optional(s.float64()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehavior81Schema)),
  deadletterEnabled: s.optional(s.boolean()),
  onDiskFullBackpressure: s.optional(s.lazy(() => diskSpaceProtectionSchema)),
  retrySettings: s.optional(s.lazy(() => retrySettingsTypeSchema)),
  orphans: s.optional(s.lazy(() => orphanFileRecoverySchema)),
  maxFileSizeMb: s.optional(s.float64()),
  encodedConfiguration: s.optional(s.string()),
  collectorInstanceId: s.string(),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethod60Schema)),
  siteName: s.optional(s.string()),
  siteId: s.optional(s.string()),
  timezoneOffset: s.optional(s.string()),
  hostname: s.optional(s.string()),
  forwarder: s.optional(s.string()),
  origin: s.optional(s.string()),
  logtags: s.optional(s.string()),
  awsApiKey: s.optional(s.string()),
  awsSecretKey: s.optional(s.string()),
  description: s.optional(s.string()),
  emptyDirCleanupSec: s.optional(s.float64()),
  directoryBatchSize: s.optional(s.float64()),
  deadletterPath: s.optional(s.string()),
  maxRetryNum: s.optional(s.float64()),
  awsSecret: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateObjectAcl: s.optional(s.string()),
  templateStorageClass: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  _keysMap: {
    objectAcl: "objectACL",
    maxFileSizeMb: "maxFileSizeMB",
    templateStreamtags: "__template_streamtags",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateObjectAcl: "__template_objectACL",
    templateStorageClass: "__template_storageClass",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
