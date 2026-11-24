import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An OpenFeature reason for the evaluation */
export const ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi = {
  Static: "STATIC",
  TargetingMatch: "TARGETING_MATCH",
  Split: "SPLIT",
  Disabled: "DISABLED",
  Unknown: "UNKNOWN",
} as const;
export type ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi =
  | (typeof ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi)[keyof typeof ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi]
  | (string & {});

export const reasonDevCycleBucketingOpenFeatureRemoteEvaluationApiSchema: EnumSchema<ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi> =
  s.enumOf<ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi>(
    ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi,
  );
