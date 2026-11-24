import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BackPrice = number;

export const backPriceSchema: Schema<BackPrice> = s.of<BackPrice>(s.union([s.float64(), s.int()]));
