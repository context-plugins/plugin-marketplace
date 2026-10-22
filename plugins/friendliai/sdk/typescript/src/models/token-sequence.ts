import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokensSchema, type Tokens } from "./unions/tokens.js";

export type TokenSequence = {
  /** A List of token IDs. */
  tokens?: Tokens;
};

export const tokenSequenceSchema: Schema<TokenSequence> = s.object<TokenSequence>({
  tokens: s.optional(s.lazy(() => tokensSchema)),
});
