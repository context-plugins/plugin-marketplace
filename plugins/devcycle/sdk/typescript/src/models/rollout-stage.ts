import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1DevCycleManagementDeprecatedFeaturesV1ApiSchema,
  type Type1DevCycleManagementDeprecatedFeaturesV1Api,
} from "./type1-dev-cycle-management-deprecated-features-v1-api.js";

export type RolloutStage = {
  /** Target percentage to reach by the step date */
  percentage: number;
  /** Defines the transition into this percentage level */
  type: Type1DevCycleManagementDeprecatedFeaturesV1Api;
  /** Date the target percentage should be fully applied */
  date: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rolloutStageProperties: s.Shape<RolloutStage> = {
  percentage: s.float64(),
  type: type1DevCycleManagementDeprecatedFeaturesV1ApiSchema,
  date: s.dateTime(),
};

export const rolloutStageInternalSchema: Schema<RolloutStage> = s.object<RolloutStage>(
  rolloutStageProperties,
  { additionalProperties: s.json() },
);

export const rolloutStageSchema: Schema<RolloutStage> = s.lazySchema(() =>
  s.object<RolloutStage>(
    {
      ...rolloutStageProperties,
      percentage: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
