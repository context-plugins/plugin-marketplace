import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { effortSchema, type Effort } from "../effort.js";

/**
 * Relative generation effort level. Higher effort can improve quality on harder prompts at the cost
 * of additional compute.
 */
export type Effort1 = Effort;

export const effort1Schema: Schema<Effort1> = s.of<Effort1>(s.union([s.lazy(() => effortSchema)]));
