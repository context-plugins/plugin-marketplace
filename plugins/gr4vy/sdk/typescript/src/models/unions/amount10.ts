import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount to refund, in the smallest currency unit (e.g., cents). If omitted, a full refund will
 * be requested.
 */
export type Amount10 = number;

export const amount10Schema: Schema<Amount10> = s.of<Amount10>(s.union([s.int()]));
