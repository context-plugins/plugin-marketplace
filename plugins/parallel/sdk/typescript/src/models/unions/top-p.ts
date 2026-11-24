import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The top p to use for chat completions. Unsupported. */
export type TopP = number;

export const topPSchema: Schema<TopP> = s.of<TopP>(s.union([s.float64()]));
