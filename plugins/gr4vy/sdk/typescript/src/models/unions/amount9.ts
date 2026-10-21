import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount to capture, in the smallest currency unit (e.g., cents). This must be less than or
 * equal to the authorized amount, unless over-capture is available.
 */
export type Amount9 = number;

export const amount9Schema: Schema<Amount9> = s.of<Amount9>(s.union([s.int()]));
