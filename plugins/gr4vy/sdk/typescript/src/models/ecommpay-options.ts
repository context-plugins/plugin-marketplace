import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingEndDateSchema, type BookingEndDate } from "./unions/booking-end-date.js";
import { bookingStartDateSchema, type BookingStartDate } from "./unions/booking-start-date.js";

export type EcommpayOptions = {
  /** The start date of the booking in ISO 8601 format (YYYY-MM-DD). Required for certain MCCs. */
  bookingStartDate?: BookingStartDate;
  /** The end date of the booking in ISO 8601 format (YYYY-MM-DD). Required for certain MCCs. */
  bookingEndDate?: BookingEndDate;
};

export const ecommpayOptionsSchema: Schema<EcommpayOptions> = s.object<EcommpayOptions>({
  bookingStartDate: s.optional(s.lazy(() => bookingStartDateSchema)),
  bookingEndDate: s.optional(s.lazy(() => bookingEndDateSchema)),
  _keysMap: {
    bookingStartDate: "booking_start_date",
    bookingEndDate: "booking_end_date",
  },
});
