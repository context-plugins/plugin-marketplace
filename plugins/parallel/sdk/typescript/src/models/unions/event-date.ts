import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Date when this event was produced. ISO 8601 date (YYYY-MM-DD) or partial (YYYY-MM or YYYY). */
export type EventDate = string;

export const eventDateSchema: Schema<EventDate> = s.of<EventDate>(s.union([s.string()]));
