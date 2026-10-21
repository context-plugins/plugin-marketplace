import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The expected type for the parameter. */
export const StaticToolParameterType2 = {
  String: "string",
  Int: "int",
  Boolean: "boolean",
  DataSourceList: "data_source_list",
} as const;
export type StaticToolParameterType2 =
  | (typeof StaticToolParameterType2)[keyof typeof StaticToolParameterType2]
  | (string & {});

export const staticToolParameterType2Schema: EnumSchema<StaticToolParameterType2> =
  s.enumOf<StaticToolParameterType2>(StaticToolParameterType2);
