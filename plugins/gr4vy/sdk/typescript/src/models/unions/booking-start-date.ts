import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The start date of the booking in ISO 8601 format (YYYY-MM-DD). Required for certain MCCs. */
export type BookingStartDate = string;

export const bookingStartDateSchema: Schema<BookingStartDate> = s.of<BookingStartDate>(s.union([s.string()]));
