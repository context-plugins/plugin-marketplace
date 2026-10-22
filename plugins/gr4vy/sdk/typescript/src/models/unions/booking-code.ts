import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unique identifier of the reservation in the global distribution system. */
export type BookingCode = string;

export const bookingCodeSchema: Schema<BookingCode> = s.of<BookingCode>(s.union([s.string()]));
