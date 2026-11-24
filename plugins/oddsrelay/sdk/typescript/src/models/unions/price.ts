import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Price = number;

export const priceSchema: Schema<Price> = s.of<Price>(s.union([s.float64(), s.int()]));
