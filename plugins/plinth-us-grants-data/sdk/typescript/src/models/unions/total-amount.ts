import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalAmount = number;

export const totalAmountSchema: Schema<TotalAmount> = s.of<TotalAmount>(s.union([s.int()]));
