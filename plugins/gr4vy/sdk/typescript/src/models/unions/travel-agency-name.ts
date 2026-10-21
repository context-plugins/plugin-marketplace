import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the travel agency. */
export type TravelAgencyName = string;

export const travelAgencyNameSchema: Schema<TravelAgencyName> = s.of<TravelAgencyName>(s.union([s.string()]));
