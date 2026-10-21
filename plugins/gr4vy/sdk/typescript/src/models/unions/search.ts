import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the buyers for which the `display_name` or `external_identifier`
 * matches this value.
 */
export type Search = string;

export const searchSchema: Schema<Search> = s.of<Search>(s.union([s.string()]));
