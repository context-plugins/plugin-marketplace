import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ColumnTypeDto = {
  Unknown: "unknown",
  String: "string",
  Integer: "integer",
  Float: "float",
  Time: "time",
  Boolean: "boolean",
  Date: "date",
  DateTime: "dateTime",
} as const;
export type ColumnTypeDto = (typeof ColumnTypeDto)[keyof typeof ColumnTypeDto] | (string & {});

export const columnTypeDtoSchema: EnumSchema<ColumnTypeDto> = s.enumOf<ColumnTypeDto>(ColumnTypeDto);
