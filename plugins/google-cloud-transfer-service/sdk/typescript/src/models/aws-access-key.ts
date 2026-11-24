import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * AWS access key (see [AWS Security
 * Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For
 * information on our data retention policy for user credentials, see [User
 * credentials](/storage-transfer/docs/data-retention#user-credentials).
 */
export type AwsAccessKey = {
  /** Required. AWS secret access key. This field is not returned in RPC responses. */
  secretAccessKey?: string;
  /** Required. AWS access key ID. */
  accessKeyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsAccessKeySchema: Schema<AwsAccessKey> = s.object<AwsAccessKey>(
  {
    secretAccessKey: s.optional(s.string()),
    accessKeyId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
