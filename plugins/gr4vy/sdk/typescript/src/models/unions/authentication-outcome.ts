import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions whose authentication process ended with the
 * specified outcome. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't
 * undergo an authentication process.
 */
export type AuthenticationOutcome = string[];

export const authenticationOutcomeSchema: Schema<AuthenticationOutcome> = s.of<AuthenticationOutcome>(
  s.union([s.array(s.string())]),
);
