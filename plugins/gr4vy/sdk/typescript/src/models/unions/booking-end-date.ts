import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The end date of the booking in ISO 8601 format (YYYY-MM-DD). Required for certain MCCs. */
export type BookingEndDate = string;

export const bookingEndDateSchema: Schema<BookingEndDate> = s.of<BookingEndDate>(s.union([s.string()]));
