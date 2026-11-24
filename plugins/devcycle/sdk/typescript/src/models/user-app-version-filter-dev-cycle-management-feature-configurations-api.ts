import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  comparatorDevCycleManagementFeatureConfigurationsApiSchema,
  type ComparatorDevCycleManagementFeatureConfigurationsApi,
} from "./comparator-dev-cycle-management-feature-configurations-api.js";

export type UserAppVersionFilterDevCycleManagementFeatureConfigurationsApi = {
  /** Comparator to use */
  comparator: ComparatorDevCycleManagementFeatureConfigurationsApi;
  /**
   * An array of values is required for all filters except when the comparator is 'exist' or
   * '!exist'
   */
  values?: string[];
  /** Filter type of this audience @default "user" */
  type?: "user";
  /** Sub type of this filter @default "appVersion" */
  subType?: "appVersion";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userAppVersionFilterDevCycleManagementFeatureConfigurationsApiSchema: Schema<UserAppVersionFilterDevCycleManagementFeatureConfigurationsApi> =
  s.object<UserAppVersionFilterDevCycleManagementFeatureConfigurationsApi>(
    {
      comparator: comparatorDevCycleManagementFeatureConfigurationsApiSchema,
      values: s.optional(s.array(s.string())),
      type: s.defaulted(s.literal("user"), "user"),
      subType: s.defaulted(s.literal("appVersion"), "appVersion"),
    },
    { additionalProperties: s.json() },
  );
