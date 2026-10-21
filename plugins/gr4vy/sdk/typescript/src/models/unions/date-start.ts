import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The start date of this itinerary item. */
export type DateStart = string;

export const dateStartSchema: Schema<DateStart> = s.of<DateStart>(s.union([s.string()]));
