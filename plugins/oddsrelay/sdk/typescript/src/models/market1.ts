import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchedOutcomeSchema, type MatchedOutcome } from "./matched-outcome.js";

export type Market1 = {
  key: string;
  outcomes: MatchedOutcome[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const market1Schema: Schema<Market1> = s.object<Market1>(
  {
    key: s.string(),
    outcomes: s.array(s.lazy(() => matchedOutcomeSchema)),
  },
  { additionalProperties: s.json() },
);
