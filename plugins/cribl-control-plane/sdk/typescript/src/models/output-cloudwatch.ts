import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";

export type OutputCloudwatch = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "cloudwatch" */
  type?: "cloudwatch";
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
  /** CloudWatch log group to associate events with */
  logGroupName: string;
  /**
   * Prefix for CloudWatch log stream name. This prefix will be used to generate a unique log stream
   * name per cribl instance, for example: myStream_myHost_myOutputId
   */
  logStreamName: string;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /** Secret key */
  awsSecretKey?: string;
  /** Region where the CloudWatchLogs is located */
  region: string;
  /**
   * CloudWatchLogs service endpoint. If empty, defaults to the AWS Region-specific endpoint.
   * Otherwise, it must point to CloudWatchLogs-compatible endpoint.
   */
  endpoint?: string;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /** Use Assume Role credentials to access CloudWatchLogs */
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
  /** Maximum number of queued batches before blocking */
  maxQueueSize?: number;
  /**
   * Maximum size (KB) of each individual record before compression. For non compressible data 1MB
   * is the max recommended size
   */
  maxRecordSizeKb?: number;
  /**
   * Maximum time between requests. Small values could cause the payload size to be smaller than the
   * configured Max record size.
   */
  flushPeriodSec?: number;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
  /** Access key */
  awsApiKey?: string;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
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
   * Binds 'logGroupName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logGroupName' at runtime.
   */
  templateLogGroupName?: string;
  /**
   * Binds 'logStreamName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logStreamName' at runtime.
   */
  templateLogStreamName?: string;
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
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
  /**
   * Binds 'awsApiKey' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'awsApiKey' at
   * runtime.
   */
  templateAwsApiKey?: string;
};

export const outputCloudwatchSchema: Schema<OutputCloudwatch> = s.object<OutputCloudwatch>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("cloudwatch"), "cloudwatch"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  logGroupName: s.string(),
  logStreamName: s.string(),
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
  maxQueueSize: s.optional(s.float64()),
  maxRecordSizeKb: s.optional(s.float64()),
  flushPeriodSec: s.optional(s.float64()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  description: s.optional(s.string()),
  awsApiKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
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
  templateLogGroupName: s.optional(s.string()),
  templateLogStreamName: s.optional(s.string()),
  templateAwsSecretKey: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateAwsApiKey: s.optional(s.string()),
  _keysMap: {
    maxRecordSizeKb: "maxRecordSizeKB",
    templateStreamtags: "__template_streamtags",
    templateLogGroupName: "__template_logGroupName",
    templateLogStreamName: "__template_logStreamName",
    templateAwsSecretKey: "__template_awsSecretKey",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
    templateOnBackpressure: "__template_onBackpressure",
    templateAwsApiKey: "__template_awsApiKey",
  },
});
