import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** max USD per 1M input tokens */
export type MaxInputPrice = number;

export const maxInputPriceSchema: Schema<MaxInputPrice> = s.of<MaxInputPrice>(s.union([s.float64()]));
