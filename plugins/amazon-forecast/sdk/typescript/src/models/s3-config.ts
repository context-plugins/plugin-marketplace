import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type S3Config = {
  /**
   * The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3
   * bucket.
   */
  path: string;
  /**
   * The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to
   * access the Amazon S3 bucket or files. If you provide a value for the KMSKeyArn key, the role
   * must allow access to the key. Passing a role across Amazon Web Services accounts is not
   * allowed. If you pass a role that isn't in your account, you get an InvalidInputException error.
   */
  roleArn: string;
  /** The Amazon Resource Name (ARN) of an Key Management Service (KMS) key. */
  kmsKeyArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3ConfigSchema: Schema<S3Config> = s.object<S3Config>(
  {
    path: s.string(),
    roleArn: s.string(),
    kmsKeyArn: s.optional(s.string()),
    _keysMap: {
      path: "Path",
      roleArn: "RoleArn",
      kmsKeyArn: "KMSKeyArn",
    },
  },
  { additionalProperties: s.json() },
);
