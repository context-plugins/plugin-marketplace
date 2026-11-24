import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverageSchema, type Coverage } from "./coverage.js";
import { round1Schema, type Round1 } from "./round1.js";

export type Round = {
  coverage?: Coverage;
  round?: Round1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roundSchema: Schema<Round> = s.object<Round>(
  {
    coverage: s.optional(s.lazy(() => coverageSchema)),
    round: s.optional(s.lazy(() => round1Schema)),
  },
  { additionalProperties: s.json() },
);
