import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { awsSupportedFeatureSchema, type AwsSupportedFeature } from "./aws-supported-feature.js";

export type AwsAccountResponse = {
  /** The AWS account ID. */
  accountId?: string;
  /** The ARN of the IAM role. */
  roleArn?: string;
  /** S3 bucket name for real-time anomaly detection. Present only if real-time is enabled. */
  s3Bucket?: string;
  /** AWS region of the S3 bucket. Present only if s3Bucket exists. */
  s3BucketRegion?: string;
  /** List of supported features and their permission status. */
  supportedFeatures?: AwsSupportedFeature[];
  /**
   * List of supported AWS features enabled by the caller. Returned in the same order as provided.
   */
  enabledFeatures?: string[];
  /** ISO 8601 timestamp of when the role was linked. */
  timeLinked?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsAccountResponseSchema: Schema<AwsAccountResponse> = s.object<AwsAccountResponse>(
  {
    accountId: s.optional(s.string()),
    roleArn: s.optional(s.string()),
    s3Bucket: s.optional(s.string()),
    s3BucketRegion: s.optional(s.string()),
    supportedFeatures: s.optional(s.array(s.lazy(() => awsSupportedFeatureSchema))),
    enabledFeatures: s.optional(s.array(s.string())),
    timeLinked: s.optional(s.string()),
    _keysMap: {
      accountId: "accountID",
    },
  },
  { additionalProperties: s.json() },
);
