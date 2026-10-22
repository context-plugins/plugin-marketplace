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
import { recordDataFormat8Schema, type RecordDataFormat8 } from "./record-data-format8.js";
import { shardIteratorStartSchema, type ShardIteratorStart } from "./shard-iterator-start.js";
import { shardLoadBalancingSchema, type ShardLoadBalancing } from "./shard-load-balancing.js";

export type InputKinesis = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "kinesis" */
  type?: "kinesis";
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
  /** Kinesis Data Stream to read data from */
  streamName: string;
  /** Time interval in minutes between consecutive service calls */
  serviceInterval?: number;
  /**
   * A JavaScript expression to be called with each shardId for the stream. If the expression
   * evaluates to a truthy value, the shard will be processed.
   */
  shardExpr?: string;
  /** Location at which to start reading a shard for the first time */
  shardIteratorType?: ShardIteratorStart;
  /**
   * Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.
   * Cloudwatch Logs records become one event per log event, keeping the event id, message type, log
   * group, log stream, owner, and subscription filters; other fields are dropped.
   */
  payloadFormat?: RecordDataFormat8;
  /** Maximum number of records per getRecords call */
  getRecordsLimit?: number;
  /** Maximum number of records, across all shards, to pull down at once per Worker Process */
  getRecordsLimitTotal?: number;
  /**
   * The load-balancing algorithm to use for spreading out shards across Workers and Worker
   * Processes
   */
  loadBalancingAlgorithm?: ShardLoadBalancing;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /** Secret key */
  awsSecretKey?: string;
  /** Region where the Kinesis stream is located */
  region: string;
  /**
   * Kinesis stream service endpoint. If empty, defaults to the AWS Region-specific endpoint.
   * Otherwise, it must point to Kinesis stream-compatible endpoint.
   */
  endpoint?: string;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /** Use Assume Role credentials to access Kinesis stream */
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
  /** Verify Kinesis Producer Library (KPL) event checksums */
  verifyKplCheckSums?: boolean;
  /**
   * When resuming streaming from a stored state, Stream will read the next available record, rather
   * than rereading the last-read record. Enabling this setting can cause data loss after a Worker
   * Node's unexpected shutdown or restart.
   */
  avoidDuplicates?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
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
   * Binds 'streamName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamName' at
   * runtime.
   */
  templateStreamName?: string;
  /**
   * Binds 'shardIteratorType' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'shardIteratorType' at runtime.
   */
  templateShardIteratorType?: string;
  /**
   * Binds 'payloadFormat' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'payloadFormat' at runtime.
   */
  templatePayloadFormat?: string;
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

export const inputKinesisSchema: Schema<InputKinesis> = s.object<InputKinesis>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("kinesis"), "kinesis"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  streamName: s.string(),
  serviceInterval: s.optional(s.float64()),
  shardExpr: s.optional(s.string()),
  shardIteratorType: s.optional(s.lazy(() => shardIteratorStartSchema)),
  payloadFormat: s.optional(s.lazy(() => recordDataFormat8Schema)),
  getRecordsLimit: s.optional(s.float64()),
  getRecordsLimitTotal: s.optional(s.float64()),
  loadBalancingAlgorithm: s.optional(s.lazy(() => shardLoadBalancingSchema)),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  awsSecretKey: s.optional(s.string()),
  region: s.string(),
  endpoint: s.optional(s.string()),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.optional(s.string()),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  verifyKplCheckSums: s.optional(s.boolean()),
  avoidDuplicates: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  awsApiKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateStreamName: s.optional(s.string()),
  templateShardIteratorType: s.optional(s.string()),
  templatePayloadFormat: s.optional(s.string()),
  templateAwsSecretKey: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  templateAwsApiKey: s.optional(s.string()),
  _keysMap: {
    verifyKplCheckSums: "verifyKPLCheckSums",
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateStreamName: "__template_streamName",
    templateShardIteratorType: "__template_shardIteratorType",
    templatePayloadFormat: "__template_payloadFormat",
    templateAwsSecretKey: "__template_awsSecretKey",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
    templateAwsApiKey: "__template_awsApiKey",
  },
});
