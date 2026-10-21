import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Input token count delta when included. */
export type InputTokens = number;

export const inputTokensSchema: Schema<InputTokens> = s.of<InputTokens>(s.union([s.int()]));
