import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { checkpointingTypeSchema, type CheckpointingType } from "./checkpointing-type.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { preprocessTypeSchema, type PreprocessType } from "./preprocess-type.js";
import { sqsAuthenticationMethodSchema, type SqsAuthenticationMethod } from "./sqs-authentication-method.js";
import {
  tagAfterProcessingOptionsSchema,
  type TagAfterProcessingOptions,
} from "./tag-after-processing-options.js";

export type InputBedrockS3 = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "bedrock_s3" */
  type?: "bedrock_s3";
  /** If true, the Source is disabled and will not collect data. */
  disabled?: boolean;
  /** Pipeline to process data from this Source before sending it through the Routes */
  pipeline?: string;
  /** Select whether to send data to Routes, or directly to Destinations. */
  sendToRoutes?: boolean;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /**
   * Use a disk queue to minimize data loss when connected services block. See [Cribl
   * Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud
   * Workers) and configuration options (on-prem and hybrid Workers).
   */
  pqEnabled?: boolean;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * Read-only metadata that records how the Source was created. Preserved on update when omitted
   * from the request body. Cannot be set on create.
   */
  criblSourceProvenance?: InputProvenance;
  /** Direct connections to Destinations, and optionally via a Pipeline or a Pack */
  connections?: ConnectionConfInputCollection[];
  /** Persistent queue settings for this Source. */
  pq?: PqType;
  /**
   * The name, URL, or ARN of the SQS queue to read notifications from. When a non-AWS URL is
   * specified, format must be: '{url}/myQueueName'. Example: 'https://host:port/myQueueName'. Value
   * must be a JavaScript expression (which can evaluate to a constant value), enclosed in quotes or
   * backticks. Can be evaluated only at init time. Example referencing a Global Variable:
   * `https://host:port/myQueue-${C.vars.myVar}`.
   */
  queueName: string;
  /**
   * Regex matching file names to download and process. Defaults to: .*
   */
  fileFilter?: string;
  /** SQS queue owner's AWS account ID. Leave empty if SQS queue is in same AWS account. */
  awsAccountId?: string;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /** Secret key */
  awsSecretKey?: string;
  /**
   * AWS Region where the S3 bucket and SQS queue are located. Required, unless the Queue entry is a
   * URL or ARN that includes a Region.
   */
  region?: string;
  /**
   * S3 service endpoint. If empty, defaults to the AWS Region-specific endpoint. Otherwise, it must
   * point to S3-compatible endpoint.
   */
  endpoint?: string;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * The maximum number of messages SQS should return in a poll request. Amazon SQS never returns
   * more messages than this value (however, fewer messages might be returned). Valid values: 1 to
   * 10.
   */
  maxMessages?: number;
  /**
   * After messages are retrieved by a ReceiveMessage request, \@{product} will hide them from
   * subsequent retrieve requests for at least this duration. You can set this as high as 43200 sec.
   * (12 hours).
   */
  visibilityTimeout?: number;
  /**
   * How many receiver processes to run. The higher the number, the better the throughput - at the
   * expense of CPU overhead.
   */
  numReceivers?: number;
  /**
   * Socket inactivity timeout (in seconds). Increase this value if timeouts occur due to
   * backpressure.
   */
  socketTimeout?: number;
  /**
   * Skip files that trigger a processing error. Disabled by default, which allows retries after
   * processing errors.
   */
  skipOnError?: boolean;
  /** Attach SQS notification metadata to a __sqsMetadata field on each event */
  includeSqsMetadata?: boolean;
  /** Use Assume Role credentials to access Amazon S3 */
  enableAssumeRole?: boolean;
  /** Amazon Resource Name (ARN) of the role to assume */
  assumeRoleArn?: string;
  /** External ID to use when assuming role */
  assumeRoleExternalId?: string;
  /**
   * Duration of the assumed role's session, in seconds. Minimum is 900 (15 minutes), default is
   * 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  durationSeconds?: number;
  /** Use Assume Role credentials when accessing Amazon SQS */
  enableSqsAssumeRole?: boolean;
  /** Use the same credential settings for S3 and SQS */
  sharedCredentials?: boolean;
  /** Use the same settings for S3 and SQS */
  sharedAssumeRoleArn?: boolean;
  /**
   * Optional preprocessing step that pipes collected data through an external command before
   * ingestion.
   */
  preprocess?: PreprocessType;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Maximum file size for each Parquet chunk */
  parquetChunkSizeMb?: number;
  /**
   * The maximum time allowed for downloading a Parquet chunk. Processing will stop if a chunk
   * cannot be downloaded within the time specified.
   */
  parquetChunkDownloadTimeout?: number;
  /** Checkpoint settings used to resume processing after an interruption. */
  checkpointing?: CheckpointingType;
  /**
   * How long to wait for events before trying polling again. The lower the number the higher the
   * AWS bill. The higher the number the longer it will take for the source to react to
   * configuration changes and system restarts.
   */
  pollTimeout?: number;
  /**
   * Character encoding to use when parsing ingested data. When not set, \@{product} will default to
   * UTF-8 but may incorrectly interpret multi-byte characters.
   */
  encoding?: string;
  /** Optional description for this configuration. */
  description?: string;
  /** Access key */
  awsApiKey?: string;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
  /** Amazon Resource Name (ARN) of the role to assume */
  sqsAssumeRoleArn?: string;
  /** External ID to use when assuming role */
  sqsAssumeRoleExternalId?: string;
  /**
   * Duration of the assumed role's session, in seconds. Minimum is 900 (15 minutes), default is
   * 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  sqsDurationSeconds?: number;
  /** Choose Auto to use IAM roles */
  sqsAwsAuthenticationMethod?: SqsAuthenticationMethod;
  /** Select or create a stored secret that references your access key and secret key */
  sqsAwsSecret?: string;
  /** SQS secret key */
  sqsAwsSecretKey?: string;
  /** Whether to add a tag to each S3 object after processing. */
  tagAfterProcessing?: TagAfterProcessingOptions;
  /**
   * The key for the S3 object tag applied after processing. This field accepts an expression for
   * dynamic generation.
   */
  processedTagKey?: string;
  /**
   * The value for the S3 object tag applied after processing. This field accepts an expression for
   * dynamic generation.
   */
  processedTagValue?: string;
  /**
   * Binds 'environment' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'environment' at runtime.
   */
  templateEnvironment?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'queueName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'queueName' at
   * runtime.
   */
  templateQueueName?: string;
  /**
   * Binds 'awsAccountId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'awsAccountId' at runtime.
   */
  templateAwsAccountId?: string;
  /**
   * Binds 'awsSecretKey' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'awsSecretKey' at runtime.
   */
  templateAwsSecretKey?: string;
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
  /**
   * Binds 'awsApiKey' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'awsApiKey' at
   * runtime.
   */
  templateAwsApiKey?: string;
  /**
   * Binds 'SQSAssumeRoleArn' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'SQSAssumeRoleArn' at runtime.
   */
  templateSqsAssumeRoleArn?: string;
  /**
   * Binds 'SQSAssumeRoleExternalId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'SQSAssumeRoleExternalId' at runtime.
   */
  templateSqsAssumeRoleExternalId?: string;
  /**
   * Binds 'SQSAwsSecretKey' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'SQSAwsSecretKey' at runtime.
   */
  templateSqsAwsSecretKey?: string;
};

export const inputBedrockS3Schema: Schema<InputBedrockS3> = s.object<InputBedrockS3>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("bedrock_s3"), "bedrock_s3"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  queueName: s.string(),
  fileFilter: s.optional(s.string()),
  awsAccountId: s.optional(s.string()),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  awsSecretKey: s.optional(s.string()),
  region: s.optional(s.string()),
  endpoint: s.optional(s.string()),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  maxMessages: s.optional(s.float64()),
  visibilityTimeout: s.optional(s.float64()),
  numReceivers: s.optional(s.float64()),
  socketTimeout: s.optional(s.float64()),
  skipOnError: s.optional(s.boolean()),
  includeSqsMetadata: s.optional(s.boolean()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.optional(s.string()),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  enableSqsAssumeRole: s.optional(s.boolean()),
  sharedCredentials: s.optional(s.boolean()),
  sharedAssumeRoleArn: s.optional(s.boolean()),
  preprocess: s.optional(s.lazy(() => preprocessTypeSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  parquetChunkSizeMb: s.optional(s.float64()),
  parquetChunkDownloadTimeout: s.optional(s.float64()),
  checkpointing: s.optional(s.lazy(() => checkpointingTypeSchema)),
  pollTimeout: s.optional(s.float64()),
  encoding: s.optional(s.string()),
  description: s.optional(s.string()),
  awsApiKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
  sqsAssumeRoleArn: s.optional(s.string()),
  sqsAssumeRoleExternalId: s.optional(s.string()),
  sqsDurationSeconds: s.optional(s.float64()),
  sqsAwsAuthenticationMethod: s.optional(s.lazy(() => sqsAuthenticationMethodSchema)),
  sqsAwsSecret: s.optional(s.string()),
  sqsAwsSecretKey: s.optional(s.string()),
  tagAfterProcessing: s.optional(s.lazy(() => tagAfterProcessingOptionsSchema)),
  processedTagKey: s.optional(s.string()),
  processedTagValue: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateQueueName: s.optional(s.string()),
  templateAwsAccountId: s.optional(s.string()),
  templateAwsSecretKey: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  templateAwsApiKey: s.optional(s.string()),
  templateSqsAssumeRoleArn: s.optional(s.string()),
  templateSqsAssumeRoleExternalId: s.optional(s.string()),
  templateSqsAwsSecretKey: s.optional(s.string()),
  _keysMap: {
    enableSqsAssumeRole: "enableSQSAssumeRole",
    parquetChunkSizeMb: "parquetChunkSizeMB",
    sqsAssumeRoleArn: "SQSAssumeRoleArn",
    sqsAssumeRoleExternalId: "SQSAssumeRoleExternalId",
    sqsDurationSeconds: "SQSDurationSeconds",
    sqsAwsAuthenticationMethod: "SQSAwsAuthenticationMethod",
    sqsAwsSecret: "SQSAwsSecret",
    sqsAwsSecretKey: "SQSAwsSecretKey",
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateQueueName: "__template_queueName",
    templateAwsAccountId: "__template_awsAccountId",
    templateAwsSecretKey: "__template_awsSecretKey",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
    templateAwsApiKey: "__template_awsApiKey",
    templateSqsAssumeRoleArn: "__template_SQSAssumeRoleArn",
    templateSqsAssumeRoleExternalId: "__template_SQSAssumeRoleExternalId",
    templateSqsAwsSecretKey: "__template_SQSAwsSecretKey",
  },
});
