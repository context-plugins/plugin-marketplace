import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reasonDevCycleBucketingOpenFeatureRemoteEvaluationApiSchema,
  type ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi,
} from "./reason-dev-cycle-bucketing-open-feature-remote-evaluation-api.js";

/** Flag evaluation success response. */
export type OfrepEvaluationSuccess = {
  /** Feature flag key */
  key?: string;
  /** An OpenFeature reason for the evaluation */
  reason?: ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApi;
  /** Variant of the evaluated flag value */
  variant?: string;
  /** Arbitrary metadata supporting flag evaluation */
  metadata?: Record<string, unknown>;
  /** Flag evaluation result */
  value: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ofrepEvaluationSuccessProperties: s.Shape<OfrepEvaluationSuccess> = {
  key: s.optional(s.string()),
  reason: s.optional(s.lazy(() => reasonDevCycleBucketingOpenFeatureRemoteEvaluationApiSchema)),
  variant: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  value: s.boolean(),
};

export const ofrepEvaluationSuccessInternalSchema: Schema<OfrepEvaluationSuccess> =
  s.object<OfrepEvaluationSuccess>(ofrepEvaluationSuccessProperties, { additionalProperties: s.json() });

export const ofrepEvaluationSuccessSchema: Schema<OfrepEvaluationSuccess> = s.lazySchema(() =>
  s.object<OfrepEvaluationSuccess>(
    {
      ...ofrepEvaluationSuccessProperties,
      key: s.optional(s.string().check(s.pattern("^[a-z0-9-_.]+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
