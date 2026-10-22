import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the reservation system. */
export type ReservationSystem = string;

export const reservationSystemSchema: Schema<ReservationSystem> = s.of<ReservationSystem>(
  s.union([s.string()]),
);
