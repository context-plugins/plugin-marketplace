import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolutionSchema, type Resolution } from "./resolution.js";

export type FeatureDevCycleBucketingFeatureOptInApi = {
  /** Feature ID */
  id?: string;
  /** Public name of the feature */
  name?: string;
  /** Public description of the feature */
  description?: string;
  /** Whether the opt-in status was explicitly set by the user or implicitly defaulted */
  resolution?: Resolution;
  /** Current opt-in status for this feature */
  status?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureDevCycleBucketingFeatureOptInApiSchema: Schema<FeatureDevCycleBucketingFeatureOptInApi> =
  s.object<FeatureDevCycleBucketingFeatureOptInApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      resolution: s.optional(s.lazy(() => resolutionSchema)),
      status: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
