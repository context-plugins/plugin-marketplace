import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AwsIamConfig = {
  /** The signing Amazon Web Services Region for IAM authorization. */
  signingRegion?: string;
  /** The signing service name for IAM authorization. */
  signingServiceName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsIamConfigSchema: Schema<AwsIamConfig> = s.object<AwsIamConfig>(
  {
    signingRegion: s.optional(s.string()),
    signingServiceName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
