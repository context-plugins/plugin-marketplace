import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The difference between the current and previous values. Positive values indicate an increase,
 * while negative values indicate a decrease. <br/>For `volume` and `transactions` metrics, the
 * value is the percentage change between the current and previous values, however, for
 * `authorization rate` metric, the value is the absolute difference between the current and
 * previous values.
 */
export type Delta = number;

export const deltaSchema: Schema<Delta> = s.of<Delta>(s.union([s.float64()]));
