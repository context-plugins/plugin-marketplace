import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Variable. Must be one of [String | Boolean | Number | JSON] */
export const TypeDevCycleManagementVariablesApi = {
  String: "String",
  Boolean: "Boolean",
  Number: "Number",
  Json: "JSON",
} as const;
export type TypeDevCycleManagementVariablesApi =
  | (typeof TypeDevCycleManagementVariablesApi)[keyof typeof TypeDevCycleManagementVariablesApi]
  | (string & {});

export const typeDevCycleManagementVariablesApiSchema: EnumSchema<TypeDevCycleManagementVariablesApi> =
  s.enumOf<TypeDevCycleManagementVariablesApi>(TypeDevCycleManagementVariablesApi);
