import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The delay in seconds before the requested simulation is executed. */
export type Delay = number;

export const delaySchema: Schema<Delay> = s.of<Delay>(s.union([s.int()]));
