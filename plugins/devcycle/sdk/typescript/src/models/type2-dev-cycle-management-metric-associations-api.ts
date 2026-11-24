import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Feature type */
export const Type2DevCycleManagementMetricAssociationsApi = {
  Release: "release",
  Experiment: "experiment",
  Permission: "permission",
  Ops: "ops",
} as const;
export type Type2DevCycleManagementMetricAssociationsApi =
  | (typeof Type2DevCycleManagementMetricAssociationsApi)[keyof typeof Type2DevCycleManagementMetricAssociationsApi]
  | (string & {});

export const type2DevCycleManagementMetricAssociationsApiSchema: EnumSchema<Type2DevCycleManagementMetricAssociationsApi> =
  s.enumOf<Type2DevCycleManagementMetricAssociationsApi>(Type2DevCycleManagementMetricAssociationsApi);
