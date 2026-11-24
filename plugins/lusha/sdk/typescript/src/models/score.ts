import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Refinement-only — must be paired with a base filter. Raw 0–100 contact score. Distinct from the
 * `confidence` band ("A+"/"A") returned on enriched contacts, which is derived from this score
 * (e.g. `A+` when score > 75).
 */
export type Score = {
  minScore?: number;
  maxScore?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scoreProperties: s.Shape<Score> = {
  minScore: s.optional(s.int()),
  maxScore: s.optional(s.int()),
};

export const scoreInternalSchema: Schema<Score> = s.object<Score>(scoreProperties, {
  additionalProperties: s.json(),
});

export const scoreSchema: Schema<Score> = s.lazySchema(() =>
  s.object<Score>(
    {
      ...scoreProperties,
      minScore: s.optional(s.int().check(s.gte(0), s.lte(100))),
      maxScore: s.optional(s.int().check(s.gte(0), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
