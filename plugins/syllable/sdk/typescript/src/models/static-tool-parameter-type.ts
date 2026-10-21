import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The expected type for a static tool parameter. */
export const StaticToolParameterType = {
  String: "string",
  Int: "int",
  Boolean: "boolean",
  DataSourceList: "data_source_list",
} as const;
export type StaticToolParameterType =
  | (typeof StaticToolParameterType)[keyof typeof StaticToolParameterType]
  | (string & {});

export const staticToolParameterTypeSchema: EnumSchema<StaticToolParameterType> =
  s.enumOf<StaticToolParameterType>(StaticToolParameterType);
