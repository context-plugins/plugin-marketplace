import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Wire-format type of the column values. Dimension columns use string; metric columns use float
 * (cost, usage, saving, custom, and extended metrics) or integer (count aggregation). Time-series
 * reports include a timestamp column.
 */
export const Type7DoiTReportsApi = {
  String: "string",
  Float: "float",
  Integer: "integer",
  Timestamp: "timestamp",
} as const;
export type Type7DoiTReportsApi =
  | (typeof Type7DoiTReportsApi)[keyof typeof Type7DoiTReportsApi]
  | (string & {});

export const type7DoiTReportsApiSchema: EnumSchema<Type7DoiTReportsApi> =
  s.enumOf<Type7DoiTReportsApi>(Type7DoiTReportsApi);
