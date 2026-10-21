import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeTravelDataSchema, type PazeTravelData } from "../paze-travel-data.js";

/** Details pertaining to travel bookings. */
export type TravelData = PazeTravelData;

export const travelDataSchema: Schema<TravelData> = s.of<TravelData>(
  s.union([s.lazy(() => pazeTravelDataSchema)]),
);
