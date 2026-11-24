import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The temperature to use for chat completions. Unsupported. */
export type Temperature = number;

export const temperatureSchema: Schema<Temperature> = s.of<Temperature>(s.union([s.float64()]));
