import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment amount in the smallest currency unit. */
export type Amount12 = number;

export const amount12Schema: Schema<Amount12> = s.of<Amount12>(s.union([s.int()]));
