import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the airline. */
export type CarrierName = string;

export const carrierNameSchema: Schema<CarrierName> = s.of<CarrierName>(s.union([s.string()]));
