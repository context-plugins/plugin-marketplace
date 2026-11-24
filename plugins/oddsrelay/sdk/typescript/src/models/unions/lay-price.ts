import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LayPrice = number;

export const layPriceSchema: Schema<LayPrice> = s.of<LayPrice>(s.union([s.float64(), s.int()]));
