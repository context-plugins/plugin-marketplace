import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The end date and time when anonymous access expires. Accepts ISO 8601 string or Unix timestamp.
 */
export type End = string | number;

export const endSchema: Schema<End> = s.of<End>(s.union([s.string(), s.int()]));
