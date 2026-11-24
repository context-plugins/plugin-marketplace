import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureOverrideSchema, type FeatureOverride } from "./feature-override.js";

export type OverrideResponse = {
  overrides: FeatureOverride[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const overrideResponseSchema: Schema<OverrideResponse> = s.object<OverrideResponse>(
  {
    overrides: s.array(s.lazy(() => featureOverrideSchema)),
  },
  { additionalProperties: s.json() },
);
