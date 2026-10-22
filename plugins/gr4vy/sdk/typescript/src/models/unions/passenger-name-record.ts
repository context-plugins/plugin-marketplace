import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Passenger Name Record (PNR) in the airline reservation system. */
export type PassengerNameRecord = string;

export const passengerNameRecordSchema: Schema<PassengerNameRecord> = s.of<PassengerNameRecord>(
  s.union([s.string()]),
);
