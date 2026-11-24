import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RdsDataApiConfig = {
  /** The resource ARN of the RDS cluster. */
  resourceArn: string;
  /**
   * The secret's ARN that was obtained from Secrets Manager. A secret consists of secret
   * information, the secret value, plus metadata about the secret. A secret value can be a string
   * or binary. It typically includes the ARN, secret name and description, policies, tags,
   * encryption key from the Key Management Service, and key rotation data.
   */
  secretArn: string;
  /** The name of the database in the cluster. */
  databaseName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rdsDataApiConfigSchema: Schema<RdsDataApiConfig> = s.object<RdsDataApiConfig>(
  {
    resourceArn: s.string(),
    secretArn: s.string(),
    databaseName: s.string(),
  },
  { additionalProperties: s.json() },
);
