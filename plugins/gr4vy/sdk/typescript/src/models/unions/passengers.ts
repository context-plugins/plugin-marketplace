import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { airlinePassengerSchema, type AirlinePassenger } from "../airline-passenger.js";

/** An array of the travelling passengers. */
export type Passengers = AirlinePassenger[];

export const passengersSchema: Schema<Passengers> = s.of<Passengers>(
  s.union([s.array(s.lazy(() => airlinePassengerSchema))]),
);
