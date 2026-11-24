import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A feature supported by a CloudConnect account. */
export type SupportedFeature = {
  /** The name of the feature. */
  name?: string;
  /** Whether the connected account has the required permissions for this feature. */
  hasRequiredPermissions?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportedFeatureSchema: Schema<SupportedFeature> = s.object<SupportedFeature>(
  {
    name: s.optional(s.string()),
    hasRequiredPermissions: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
