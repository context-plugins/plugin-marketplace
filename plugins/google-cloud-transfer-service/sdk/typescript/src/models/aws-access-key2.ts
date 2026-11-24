import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the
 * bucket must be granted to the access ID of the AWS access key. For information on our data
 * retention policy for user credentials, see [User
 * credentials](/storage-transfer/docs/data-retention#user-credentials).
 */
export type AwsAccessKey2 = {
  /** Required. AWS secret access key. This field is not returned in RPC responses. */
  secretAccessKey?: string;
  /** Required. AWS access key ID. */
  accessKeyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsAccessKey2Schema: Schema<AwsAccessKey2> = s.object<AwsAccessKey2>(
  {
    secretAccessKey: s.optional(s.string()),
    accessKeyId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
