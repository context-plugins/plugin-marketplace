import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The booking/itinerary number (if applicable). */
export type Sku1 = string;

export const sku1Schema: Schema<Sku1> = s.of<Sku1>(s.union([s.string()]));
