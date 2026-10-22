import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { airlineSchema, type Airline } from "../airline.js";

/** The airline data to submit to the payment service during the capture call. */
export type Airline13 = Airline;

export const airline13Schema: Schema<Airline13> = s.of<Airline13>(s.union([s.lazy(() => airlineSchema)]));
