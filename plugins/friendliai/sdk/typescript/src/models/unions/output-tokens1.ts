import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The aggregated number of text output tokens used. */
export type OutputTokens1 = number;

export const outputTokens1Schema: Schema<OutputTokens1> = s.of<OutputTokens1>(s.union([s.int()]));
