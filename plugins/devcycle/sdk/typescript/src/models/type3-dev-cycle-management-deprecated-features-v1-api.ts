import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Feature type */
export const Type3DevCycleManagementDeprecatedFeaturesV1Api = {
  Release: "release",
  Experiment: "experiment",
  Permission: "permission",
  Ops: "ops",
} as const;
export type Type3DevCycleManagementDeprecatedFeaturesV1Api =
  | (typeof Type3DevCycleManagementDeprecatedFeaturesV1Api)[keyof typeof Type3DevCycleManagementDeprecatedFeaturesV1Api]
  | (string & {});

export const type3DevCycleManagementDeprecatedFeaturesV1ApiSchema: EnumSchema<Type3DevCycleManagementDeprecatedFeaturesV1Api> =
  s.enumOf<Type3DevCycleManagementDeprecatedFeaturesV1Api>(Type3DevCycleManagementDeprecatedFeaturesV1Api);
