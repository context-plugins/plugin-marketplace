import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The aggregated number of input tokens used, including cached tokens. */
export type InputTokens1 = number;

export const inputTokens1Schema: Schema<InputTokens1> = s.of<InputTokens1>(s.union([s.int()]));
