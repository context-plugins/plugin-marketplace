import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of rollout */
export const TypeDevCycleManagementDeprecatedFeaturesV1Api = {
  Schedule: "schedule",
  Gradual: "gradual",
  Stepped: "stepped",
} as const;
export type TypeDevCycleManagementDeprecatedFeaturesV1Api =
  | (typeof TypeDevCycleManagementDeprecatedFeaturesV1Api)[keyof typeof TypeDevCycleManagementDeprecatedFeaturesV1Api]
  | (string & {});

export const typeDevCycleManagementDeprecatedFeaturesV1ApiSchema: EnumSchema<TypeDevCycleManagementDeprecatedFeaturesV1Api> =
  s.enumOf<TypeDevCycleManagementDeprecatedFeaturesV1Api>(TypeDevCycleManagementDeprecatedFeaturesV1Api);
