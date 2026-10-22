import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokenSequenceSchema, type TokenSequence } from "../token-sequence.js";

/**
 * Stop generating further tokens when generated token corresponds to any of the tokens in the
 * sequence.
 */
export type StopTokens = TokenSequence[];

export const stopTokensSchema: Schema<StopTokens> = s.of<StopTokens>(
  s.union([s.array(s.lazy(() => tokenSequenceSchema))]),
);
