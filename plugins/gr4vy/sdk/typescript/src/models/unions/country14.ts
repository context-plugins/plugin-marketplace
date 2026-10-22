import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have matching `country` values. For best performance, combine it
 * with `created_at_gte` and `created_at_lte`.
 */
export type Country14 = string[];

export const country14Schema: Schema<Country14> = s.of<Country14>(s.union([s.array(s.string())]));
