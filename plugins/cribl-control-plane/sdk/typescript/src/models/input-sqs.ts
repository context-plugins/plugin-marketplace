import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
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
import { queueTypeSchema, type QueueType } from "./queue-type.js";

export type InputSqs = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "sqs" */
  type?: "sqs";
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
   * The name, URL, or ARN of the SQS queue to read events from. When a non-AWS URL is specified,
   * format must be: '{url}/myQueueName'. Example: 'https://host:port/myQueueName'. Value must be a
   * JavaScript expression (which can evaluate to a constant value), enclosed in quotes or
   * backticks. Can only be evaluated at init time. Example referencing a Global Variable:
   * `https://host:port/myQueue-${C.vars.myVar}`.
   */
  queueName: string;
  /** The queue type used (or created) */
  queueType: QueueType;
  /** SQS queue owner's AWS account ID. Leave empty if SQS queue is in same AWS account. */
  awsAccountId?: string;
  /** Create queue if it does not exist */
  createQueue?: boolean;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /** Secret key */
  awsSecretKey?: string;
  /**
   * AWS Region where the SQS queue is located. Required, unless the Queue entry is a URL or ARN
   * that includes a Region.
   */
  region?: string;
  /**
   * SQS service endpoint. If empty, defaults to the AWS Region-specific endpoint. Otherwise, it
   * must point to SQS-compatible endpoint.
   */
  endpoint?: string;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /** Use Assume Role credentials to access SQS */
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
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * How long to wait for events before trying polling again. The lower the number the higher the
   * AWS bill. The higher the number the longer it will take for the source to react to
   * configuration changes and system restarts.
   */
  pollTimeout?: number;
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
  /** Optional description for this configuration. */
  description?: string;
  /** Access key */
  awsApiKey?: string;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
  /**
   * How many receiver processes to run. The higher the number, the better the throughput - at the
   * expense of CPU overhead.
   */
  numReceivers?: number;
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
   * Binds 'queueType' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'queueType' at
   * runtime.
   */
  templateQueueType?: string;
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
};

export const inputSqsSchema: Schema<InputSqs> = s.object<InputSqs>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("sqs"), "sqs"),
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
  queueType: queueTypeSchema,
  awsAccountId: s.optional(s.string()),
  createQueue: s.optional(s.boolean()),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  awsSecretKey: s.optional(s.string()),
  region: s.optional(s.string()),
  endpoint: s.optional(s.string()),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.optional(s.string()),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  maxMessages: s.optional(s.float64()),
  visibilityTimeout: s.optional(s.float64()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  pollTimeout: s.optional(s.float64()),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  awsApiKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
  numReceivers: s.optional(s.float64()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateQueueName: s.optional(s.string()),
  templateQueueType: s.optional(s.string()),
  templateAwsAccountId: s.optional(s.string()),
  templateAwsSecretKey: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  templateAwsApiKey: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateQueueName: "__template_queueName",
    templateQueueType: "__template_queueType",
    templateAwsAccountId: "__template_awsAccountId",
    templateAwsSecretKey: "__template_awsSecretKey",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
    templateAwsApiKey: "__template_awsApiKey",
  },
});
