import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { awsAccessKey2Schema, type AwsAccessKey2 } from "./aws-access-key2.js";

/** Optional. An AWS S3 data source. */
export type AwsS3Data2 = {
  /**
   * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'.
   * This field is treated as an object prefix. As such, it should generally not begin with a '/'.
   */
  path?: string;
  /**
   * Required. S3 Bucket name (see [Creating a
   * bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).
   */
  bucketName?: string;
  /**
   * Optional. The Resource name of a secret in Secret Manager. AWS credentials must be stored in
   * Secret Manager in JSON format: { "access_key_id": "ACCESS_KEY_ID", "secret_access_key":
   * "SECRET_ACCESS_KEY" } GoogleServiceAccount must be granted `roles/secretmanager.secretAccessor`
   * for the resource. See [Configure access to a source: Amazon S3]
   * (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager) for more
   * information. If `credentials_secret` is specified, do not specify role_arn or aws_access_key.
   * Format: `projects/{project_number}/secrets/{secret_name}`
   */
  credentialsSecret?: string;
  /**
   * Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on
   * the bucket must be granted to the access ID of the AWS access key. For information on our data
   * retention policy for user credentials, see [User
   * credentials](/storage-transfer/docs/data-retention#user-credentials).
   */
  awsAccessKey?: AwsAccessKey2;
  /**
   * Egress bytes over a Google-managed private network. This network is shared between other users
   * of Storage Transfer Service.
   */
  managedPrivateNetwork?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the role to support temporary credentials via
   * `AssumeRoleWithWebIdentity`. For more information about ARNs, see [IAM
   * ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   * When a role ARN is provided, Transfer Service fetches temporary credentials for the session
   * using a `AssumeRoleWithWebIdentity` call for the provided role using the GoogleServiceAccount
   * for this project.
   */
  roleArn?: string;
  /**
   * Service Directory Service to be used as the endpoint for transfers from a custom VPC. Format:
   * `projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service}`
   */
  privateNetworkService?: string;
  /**
   * Optional. The CloudFront distribution domain name pointing to this bucket, to use when
   * fetching. See [Transfer from S3 via
   * CloudFront](https://cloud.google.com/storage-transfer/docs/s3-cloudfront) for more information.
   * Format: `https://{id}.cloudfront.net` or any valid custom domain. Must begin with `https://`.
   */
  cloudfrontDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsS3Data2Schema: Schema<AwsS3Data2> = s.object<AwsS3Data2>(
  {
    path: s.optional(s.string()),
    bucketName: s.optional(s.string()),
    credentialsSecret: s.optional(s.string()),
    awsAccessKey: s.optional(s.lazy(() => awsAccessKey2Schema)),
    managedPrivateNetwork: s.optional(s.boolean()),
    roleArn: s.optional(s.string()),
    privateNetworkService: s.optional(s.string()),
    cloudfrontDomain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
