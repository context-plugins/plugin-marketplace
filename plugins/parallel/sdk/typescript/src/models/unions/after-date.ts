import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional start date for filtering search results. Results will be limited to content published on
 * or after this date. Provided as an RFC 3339 date string (YYYY-MM-DD).
 */
export type AfterDate = string;

export const afterDateSchema: Schema<AfterDate> = s.of<AfterDate>(s.union([s.dateOnly()]));
