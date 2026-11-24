import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparator to use */
export const ComparatorDevCycleManagementFeatureConfigurationsApi = {
  U003D: "=",
  U0021U003D: "!=",
  U003E: ">",
  U003EU003D: ">=",
  U003C: "<",
  U003CU003D: "<=",
  Exist: "exist",
  Exist2: "!exist",
} as const;
export type ComparatorDevCycleManagementFeatureConfigurationsApi =
  | (typeof ComparatorDevCycleManagementFeatureConfigurationsApi)[keyof typeof ComparatorDevCycleManagementFeatureConfigurationsApi]
  | (string & {});

export const comparatorDevCycleManagementFeatureConfigurationsApiSchema: EnumSchema<ComparatorDevCycleManagementFeatureConfigurationsApi> =
  s.enumOf<ComparatorDevCycleManagementFeatureConfigurationsApi>(
    ComparatorDevCycleManagementFeatureConfigurationsApi,
  );
