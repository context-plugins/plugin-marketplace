import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String" */
export const TypeDevCycleManagementCustomPropertiesApi = {
  String: "String",
  Boolean: "Boolean",
  Number: "Number",
} as const;
export type TypeDevCycleManagementCustomPropertiesApi =
  | (typeof TypeDevCycleManagementCustomPropertiesApi)[keyof typeof TypeDevCycleManagementCustomPropertiesApi]
  | (string & {});

export const typeDevCycleManagementCustomPropertiesApiSchema: EnumSchema<TypeDevCycleManagementCustomPropertiesApi> =
  s.enumOf<TypeDevCycleManagementCustomPropertiesApi>(TypeDevCycleManagementCustomPropertiesApi);
