import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
 * more random, while lower values like 0.2 will make it more focused and deterministic. We
 * generally recommend altering this or `top_p` but not both.
 */
export type Temperature18 = number;

export const temperature18Schema: Schema<Temperature18> = s.of<Temperature18>(s.union([s.float64()]));
