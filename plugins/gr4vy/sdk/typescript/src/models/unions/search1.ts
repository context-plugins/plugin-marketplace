import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have one of the following fields match exactly with the provided
 * `search` value.
 */
export type Search1 = string;

export const search1Schema: Schema<Search1> = s.of<Search1>(s.union([s.string()]));
