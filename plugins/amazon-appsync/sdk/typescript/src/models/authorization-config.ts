import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { awsIamConfigSchema, type AwsIamConfig } from "./aws-iam-config.js";

export type AuthorizationConfig = {
  /**
   * The authorization type that the HTTP endpoint requires. AWS_IAM: The authorization type is
   * Signature Version 4 (SigV4).
   *
   * @default "AWS_IAM"
   */
  authorizationType?: "AWS_IAM";
  awsIamConfig?: AwsIamConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorizationConfigSchema: Schema<AuthorizationConfig> = s.object<AuthorizationConfig>(
  {
    authorizationType: s.defaulted(s.literal("AWS_IAM"), "AWS_IAM"),
    awsIamConfig: s.optional(s.lazy(() => awsIamConfigSchema)),
  },
  { additionalProperties: s.json() },
);
