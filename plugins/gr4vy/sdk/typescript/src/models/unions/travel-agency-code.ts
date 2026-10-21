import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The IATA travel agency code. */
export type TravelAgencyCode = string;

export const travelAgencyCodeSchema: Schema<TravelAgencyCode> = s.of<TravelAgencyCode>(s.union([s.string()]));
