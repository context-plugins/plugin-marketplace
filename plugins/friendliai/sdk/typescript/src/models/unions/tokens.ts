import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A List of token IDs. */
export type Tokens = number[];

export const tokensSchema: Schema<Tokens> = s.of<Tokens>(s.union([s.array(s.int())]));
