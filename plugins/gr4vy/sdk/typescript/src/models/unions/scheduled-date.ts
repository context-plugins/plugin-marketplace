import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Defines scheduled payment start date. Must be provided in ISO 8601 format `(YYYY-MM-DD`). If not
 * specified, The default is 2 days in the future.
 */
export type ScheduledDate = string;

export const scheduledDateSchema: Schema<ScheduledDate> = s.of<ScheduledDate>(s.union([s.string()]));
