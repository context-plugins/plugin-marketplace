import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the transition into this percentage level */
export const Type1DevCycleManagementDeprecatedFeaturesV1Api = {
  Linear: "linear",
  Discrete: "discrete",
} as const;
export type Type1DevCycleManagementDeprecatedFeaturesV1Api =
  | (typeof Type1DevCycleManagementDeprecatedFeaturesV1Api)[keyof typeof Type1DevCycleManagementDeprecatedFeaturesV1Api]
  | (string & {});

export const type1DevCycleManagementDeprecatedFeaturesV1ApiSchema: EnumSchema<Type1DevCycleManagementDeprecatedFeaturesV1Api> =
  s.enumOf<Type1DevCycleManagementDeprecatedFeaturesV1Api>(Type1DevCycleManagementDeprecatedFeaturesV1Api);
