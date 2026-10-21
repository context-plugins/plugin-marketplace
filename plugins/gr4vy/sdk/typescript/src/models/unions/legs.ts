import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { airlineLegSchema, type AirlineLeg } from "../airline-leg.js";

/** An array of separate trip segments. Each leg contains detailed itinerary information. */
export type Legs = AirlineLeg[];

export const legsSchema: Schema<Legs> = s.of<Legs>(s.union([s.array(s.lazy(() => airlineLegSchema))]));
