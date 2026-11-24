import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backSchema, type Back } from "./back.js";
import { lay2Schema, type Lay2 } from "./unions/lay2.js";

export type MatchedOutcome = {
  name: string;
  /** The line, on line markets. */
  point?: number;
  /** Best price first. */
  back: Back[];
  /**
   * Lowest price first. An array of exchange offers; on `each-way` and `extra-place` an object
   * `{win, place}` of two such arrays; absent on `dutching`.
   */
  lay?: Lay2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchedOutcomeSchema: Schema<MatchedOutcome> = s.object<MatchedOutcome>(
  {
    name: s.string(),
    point: s.optional(s.float64()),
    back: s.array(s.lazy(() => backSchema)),
    lay: s.optional(s.lazy(() => lay2Schema)),
  },
  { additionalProperties: s.json() },
);
