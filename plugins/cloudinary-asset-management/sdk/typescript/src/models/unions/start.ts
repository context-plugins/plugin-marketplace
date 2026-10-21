import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The start date and time when anonymous access becomes available. Accepts ISO 8601 string or Unix
 * timestamp.
 */
export type Start = string | number;

export const startSchema: Schema<Start> = s.of<Start>(s.union([s.string(), s.int()]));
