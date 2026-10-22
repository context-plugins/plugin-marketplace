import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An alternative to sampling with temperature, called nucleus sampling, where the model considers
 * the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising
 * the top 10% probability mass are considered. We generally recommend altering this or
 * `temperature` but not both.
 */
export type TopP16 = number;

export const topP16Schema: Schema<TopP16> = s.of<TopP16>(s.union([s.float64()]));
