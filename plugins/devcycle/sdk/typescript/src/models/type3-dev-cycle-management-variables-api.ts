import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3DevCycleManagementVariablesApi = {
  String: "String",
  Boolean: "Boolean",
  Number: "Number",
  Json: "JSON",
} as const;
export type Type3DevCycleManagementVariablesApi =
  | (typeof Type3DevCycleManagementVariablesApi)[keyof typeof Type3DevCycleManagementVariablesApi]
  | (string & {});

export const type3DevCycleManagementVariablesApiSchema: EnumSchema<Type3DevCycleManagementVariablesApi> =
  s.enumOf<Type3DevCycleManagementVariablesApi>(Type3DevCycleManagementVariablesApi);
