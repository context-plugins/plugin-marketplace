import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Nucleus sampling parameter. The model samples from the smallest token set whose cumulative
 * probability reaches `top_p`.
 */
export type TopP14 = number;

export const topP14Schema: Schema<TopP14> = s.of<TopP14>(s.union([s.float64()]));
