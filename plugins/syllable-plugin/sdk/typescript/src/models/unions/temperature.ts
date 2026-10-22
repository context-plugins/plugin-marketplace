import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Temperature parameter for the model. Determines randomness of responses - higher is more random,
 * lower is more focused. Must be between 0.0 and 2.0, inclusive.
 */
export type Temperature = number;

export const temperatureSchema: Schema<Temperature> = s.of<Temperature>(s.union([s.float64()]));
