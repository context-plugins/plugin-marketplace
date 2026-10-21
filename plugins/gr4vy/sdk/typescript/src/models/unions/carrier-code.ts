import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** 3 character airline code as set by IATA. */
export type CarrierCode = string;

export const carrierCodeSchema: Schema<CarrierCode> = s.of<CarrierCode>(s.union([s.string()]));
