import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Variable. Must be one of [String | Boolean | Number | JSON] */
export const Type3DevCycleManagementMetricAssociationsApi = {
  String: "String",
  Boolean: "Boolean",
  Number: "Number",
  Json: "JSON",
} as const;
export type Type3DevCycleManagementMetricAssociationsApi =
  | (typeof Type3DevCycleManagementMetricAssociationsApi)[keyof typeof Type3DevCycleManagementMetricAssociationsApi]
  | (string & {});

export const type3DevCycleManagementMetricAssociationsApiSchema: EnumSchema<Type3DevCycleManagementMetricAssociationsApi> =
  s.enumOf<Type3DevCycleManagementMetricAssociationsApi>(Type3DevCycleManagementMetricAssociationsApi);
