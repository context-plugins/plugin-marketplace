import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { airlineSchema, type Airline } from "../airline.js";

/**
 * The airline addendum data which describes the airline booking associated with this transaction.
 */
export type Airline1 = Airline;

export const airline1Schema: Schema<Airline1> = s.of<Airline1>(s.union([s.lazy(() => airlineSchema)]));
