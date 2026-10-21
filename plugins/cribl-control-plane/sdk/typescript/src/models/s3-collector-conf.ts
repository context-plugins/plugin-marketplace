import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { partitioningScheme1Schema, type PartitioningScheme1 } from "./partitioning-scheme1.js";
import { pathExtractor3Schema, type PathExtractor3 } from "./path-extractor3.js";

export type S3CollectorConf = {
  /** Name of the predefined Destination that will be used to auto-populate Collector settings */
  outputName?: string;
  /** S3 Bucket from which to collect data */
  bucket: string;
  /** Maximum file size for each Parquet chunk */
  parquetChunkSizeMb?: number;
  /**
   * Maximum time allowed for downloading a Parquet chunk. Processing will stop if a chunk cannot be
   * downloaded within the time specified.
   */
  parquetChunkDownloadTimeout?: number;
  /** Region from which to retrieve data */
  region?: string;
  /**
   * Directory where data will be collected. Templating (such as
   * 'myDir/${datacenter}/${host}/${app}/') and time-based tokens (such as
   * 'myOtherDir/${_time:%Y}/${_time:%m}/${_time:%d}/') are supported. Can be a constant (enclosed
   * in quotes) or a JavaScript expression.
   */
  path?: string;
  /**
   * Partitioning scheme used for this dataset. Using a known scheme like DDSS enables more
   * efficient data reading and retrieval.
   */
  partitioningScheme?: PartitioningScheme1;
  /**
   * Allows using template tokens as context for expressions that enrich discovery results. For
   * example, given a template /path/${epoch}, an extractor under key "epoch" with an expression
   * {date: new Date(+value*1000)}, will enrich discovery results with a human readable "date"
   * field.
   */
  extractors?: PathExtractor3[];
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /**
   * Must point to an S3-compatible endpoint. If empty, defaults to an AWS region-specific endpoint.
   */
  endpoint?: string;
  /** Use AssumeRole credentials */
  enableAssumeRole?: boolean;
  /** Amazon Resource Name (ARN) of the role to assume */
  assumeRoleArn?: string;
  /** External ID to use when assuming role */
  assumeRoleExternalId?: string;
  /**
   * Duration of the Assumed Role's session, in seconds. Minimum is 900 (15 minutes), default is
   * 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  durationSeconds?: number;
  /** Maximum number of metadata objects to batch before recording as results */
  maxBatchSize?: number;
  /** Reuse connections between requests to improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as a self-signed
   * certificate)
   */
  rejectUnauthorized?: boolean;
  /**
   * Disable if you can access files within the bucket but not the bucket itself. Resolves errors of
   * the form "discover task initialization failed...error: Forbidden".
   */
  verifyPermissions?: boolean;
  /** Disable Collector event time filtering when a date range is specified */
  disableTimeFilter?: boolean;
  /**
   * Access key. If not present, will fall back to env.AWS_ACCESS_KEY_ID, or to the metadata
   * endpoint for IAM creds. Optional when running on AWS. This value can be a constant or a
   * JavaScript expression.
   */
  awsApiKey?: string;
  /**
   * Secret key. If not present, will fall back to env.AWS_SECRET_ACCESS_KEY, or to the metadata
   * endpoint for IAM creds. Optional when running on AWS. This value can be a constant or a
   * JavaScript expression.
   */
  awsSecretKey?: string;
  /** Select or create a stored secret that references AWS access key and secret key. */
  awsSecret?: string;
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
};

export const s3CollectorConfSchema: Schema<S3CollectorConf> = s.object<S3CollectorConf>({
  outputName: s.optional(s.string()),
  bucket: s.string(),
  parquetChunkSizeMb: s.optional(s.float64()),
  parquetChunkDownloadTimeout: s.optional(s.float64()),
  region: s.optional(s.string()),
  path: s.optional(s.string()),
  partitioningScheme: s.optional(s.lazy(() => partitioningScheme1Schema)),
  extractors: s.optional(s.array(s.lazy(() => pathExtractor3Schema))),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  endpoint: s.optional(s.string()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.optional(s.string()),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  maxBatchSize: s.optional(s.float64()),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  verifyPermissions: s.optional(s.boolean()),
  disableTimeFilter: s.optional(s.boolean()),
  awsApiKey: s.optional(s.string()),
  awsSecretKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
  templateBucket: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  _keysMap: {
    parquetChunkSizeMb: "parquetChunkSizeMB",
    templateBucket: "__template_bucket",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
  },
});
