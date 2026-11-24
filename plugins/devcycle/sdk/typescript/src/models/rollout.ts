import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rolloutStageInternalSchema, rolloutStageSchema, type RolloutStage } from "./rollout-stage.js";
import {
  typeDevCycleManagementDeprecatedFeaturesV1ApiSchema,
  type TypeDevCycleManagementDeprecatedFeaturesV1Api,
} from "./type-dev-cycle-management-deprecated-features-v1-api.js";

export type Rollout = {
  /** Rollout start percentage */
  startPercentage?: number;
  /** Type of rollout */
  type: TypeDevCycleManagementDeprecatedFeaturesV1Api;
  /** Date to start rollout */
  startDate: Date;
  /** Stages of rollout */
  stages?: RolloutStage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rolloutProperties: s.Shape<Rollout> = {
  startPercentage: s.optional(s.float64()),
  type: typeDevCycleManagementDeprecatedFeaturesV1ApiSchema,
  startDate: s.dateTime(),
  stages: s.optional(s.array(s.lazy(() => rolloutStageInternalSchema))),
};

export const rolloutInternalSchema: Schema<Rollout> = s.object<Rollout>(rolloutProperties, {
  additionalProperties: s.json(),
});

export const rolloutSchema: Schema<Rollout> = s.lazySchema(() =>
  s.object<Rollout>(
    {
      ...rolloutProperties,
      startPercentage: s.optional(s.float64().check(s.gte(0), s.lte(1))),
      stages: s.optional(s.array(s.lazy(() => rolloutStageSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
