import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Defines subscription start date. Must be provided in ISO 8601 format `(YYYY-MM-DD`). If not
 * specified, The default is the current date.
 */
export type StartDate = string;

export const startDateSchema: Schema<StartDate> = s.of<StartDate>(s.union([s.string()]));
