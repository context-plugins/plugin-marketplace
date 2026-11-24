import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AwsSupportedFeature = {
  /** Feature name. */
  name?: string;
  /** Whether the role has the required permissions for this feature. */
  hasRequiredPermissions?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsSupportedFeatureSchema: Schema<AwsSupportedFeature> = s.object<AwsSupportedFeature>(
  {
    name: s.optional(s.string()),
    hasRequiredPermissions: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
