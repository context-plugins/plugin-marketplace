import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anzsicSchema, type Anzsic } from "./anzsic.js";
import { matchTypeSchema, type MatchType } from "./match-type.js";

export type Category = {
  /**
   * Indicates the method used to match a payment transaction with a merchant or business
   * classification code.
   */
  matchType?: MatchType;
  /** The confidence score for the matchType which is a float value between 0 and 1. */
  matchScore?: number;
  anzsic?: Anzsic;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categorySchema: Schema<Category> = s.object<Category>(
  {
    matchType: s.optional(s.lazy(() => matchTypeSchema)),
    matchScore: s.optional(s.float64()),
    anzsic: s.optional(s.lazy(() => anzsicSchema)),
  },
  { additionalProperties: s.json() },
);
