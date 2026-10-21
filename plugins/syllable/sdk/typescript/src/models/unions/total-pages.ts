import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The total number of pages of results given the indicated page size */
export type TotalPages = number;

export const totalPagesSchema: Schema<TotalPages> = s.of<TotalPages>(s.union([s.int()]));
