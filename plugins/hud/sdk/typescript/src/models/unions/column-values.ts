import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ColumnValues = string | number | string[];

export const columnValuesSchema: Schema<ColumnValues> = s.of<ColumnValues>(
  s.union([s.string(), s.float64(), s.array(s.string())]),
);
