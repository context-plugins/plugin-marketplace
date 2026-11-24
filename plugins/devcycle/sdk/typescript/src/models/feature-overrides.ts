import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureOverrides = {
  overrides: Record<string, unknown>;
  uniqueTeamMembers: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureOverridesSchema: Schema<FeatureOverrides> = s.object<FeatureOverrides>(
  {
    overrides: s.record(s.string(), s.unknown()),
    uniqueTeamMembers: s.float64(),
  },
  { additionalProperties: s.json() },
);
