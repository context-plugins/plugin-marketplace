import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Feature type. */
export const Type2DevCycleManagementDeprecatedFeaturesV1Api = {
  Release: "release",
  Experiment: "experiment",
  Permission: "permission",
  Ops: "ops",
} as const;
export type Type2DevCycleManagementDeprecatedFeaturesV1Api =
  | (typeof Type2DevCycleManagementDeprecatedFeaturesV1Api)[keyof typeof Type2DevCycleManagementDeprecatedFeaturesV1Api]
  | (string & {});

export const type2DevCycleManagementDeprecatedFeaturesV1ApiSchema: EnumSchema<Type2DevCycleManagementDeprecatedFeaturesV1Api> =
  s.enumOf<Type2DevCycleManagementDeprecatedFeaturesV1Api>(Type2DevCycleManagementDeprecatedFeaturesV1Api);
