import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type SubScore = {
  /** null when assessment is individual_or_unverified */
  score?: number | null;
  reasons?: Reason[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subScoreProperties: s.Shape<SubScore> = {
  score: s.optionalNullable(s.int()),
  reasons: s.optional(s.array(s.lazy(() => reasonSchema))),
};

export const subScoreInternalSchema: Schema<SubScore> = s.object<SubScore>(subScoreProperties, {
  additionalProperties: s.json(),
});

export const subScoreSchema: Schema<SubScore> = s.lazySchema(() =>
  s.object<SubScore>(
    {
      ...subScoreProperties,
      score: s.optionalNullable(s.int().check(s.gte(0), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
