import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  featureDevCycleBucketingFeatureOptInApiSchema,
  type FeatureDevCycleBucketingFeatureOptInApi,
} from "./feature-dev-cycle-bucketing-feature-opt-in-api.js";
import { settingsSchema, type Settings } from "./settings.js";

export type OptInConfigResponse = {
  settings: Settings;
  features: FeatureDevCycleBucketingFeatureOptInApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optInConfigResponseSchema: Schema<OptInConfigResponse> = s.object<OptInConfigResponse>(
  {
    settings: settingsSchema,
    features: s.array(s.lazy(() => featureDevCycleBucketingFeatureOptInApiSchema)),
  },
  { additionalProperties: s.json() },
);
