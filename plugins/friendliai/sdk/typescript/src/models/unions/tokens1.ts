import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The tokenized prompt (i.e., input tokens).
 *
 * Either `input` or `tokens` field is required.
 */
export type Tokens1 = number[];

export const tokens1Schema: Schema<Tokens1> = s.of<Tokens1>(s.union([s.array(s.int())]));
