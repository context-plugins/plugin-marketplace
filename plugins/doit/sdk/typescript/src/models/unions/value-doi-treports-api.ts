import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The content of a single cell from a BigQuery result. Can be a string, number, or null. */
export type ValueDoiTReportsApi = string | number;

export const valueDoiTReportsApiSchema: Schema<ValueDoiTReportsApi> = s.of<ValueDoiTReportsApi>(
  s.union([s.string(), s.float64(), s.int()]),
);
