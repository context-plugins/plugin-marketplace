import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** ColumnDto — a column's definition plus aggregated per-cell status counts. */
export type ColumnSummary = {
  columnId?: string;
  name?: string;
  type?: Type;
  key?: string | null;
  /** Default Lusha columns cannot be removed. */
  isDefault?: boolean;
  addedAt?: Date;
  updatedAt?: Date;
  rowsNotRun?: number;
  rowsProcessing?: number;
  rowsSuccess?: number;
  rowsNoData?: number;
  rowsFailed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnSummarySchema: Schema<ColumnSummary> = s.object<ColumnSummary>(
  {
    columnId: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    key: s.optionalNullable(s.string()),
    isDefault: s.optional(s.boolean()),
    addedAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    rowsNotRun: s.optional(s.int()),
    rowsProcessing: s.optional(s.int()),
    rowsSuccess: s.optional(s.int()),
    rowsNoData: s.optional(s.int()),
    rowsFailed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
