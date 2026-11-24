import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CoreV1CloudconnectAwsAccountsRequest = {
  /** The AWS account ID. */
  accountId: string;
  /** The ARN of the IAM role created for DoiT access. */
  roleArn: string;
  /**
   * S3 bucket name for CloudTrail real-time anomaly detection. Required together with
   * s3BucketRegion.
   */
  s3Bucket?: string;
  /** AWS region of the S3 bucket. Required together with s3Bucket. */
  s3BucketRegion?: string;
  /**
   * Declares which supported AWS features the caller intends to enable. Values must match feature
   * names configured in awsFeaturePermissions on app/cloud-connect. The value is persisted and
   * returned in account responses. When "real-time-data" is included, s3Bucket and s3BucketRegion
   * are required; when it is not included, s3Bucket and s3BucketRegion are not allowed.
   */
  enabledFeatures: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coreV1CloudconnectAwsAccountsRequestSchema: Schema<CoreV1CloudconnectAwsAccountsRequest> =
  s.object<CoreV1CloudconnectAwsAccountsRequest>(
    {
      accountId: s.string(),
      roleArn: s.string(),
      s3Bucket: s.optional(s.string()),
      s3BucketRegion: s.optional(s.string()),
      enabledFeatures: s.array(s.string()),
      _keysMap: {
        accountId: "accountID",
      },
    },
    { additionalProperties: s.json() },
  );
