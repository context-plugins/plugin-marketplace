import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The aggregated number of input tokens that has been cached. */
export type InputCachedTokens = number;

export const inputCachedTokensSchema: Schema<InputCachedTokens> = s.of<InputCachedTokens>(s.union([s.int()]));
