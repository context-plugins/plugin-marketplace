import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vectorDataSchema, type VectorData } from "./vector-data.js";
import { wikiDataSchema, type WikiData } from "./wiki-data.js";

export type ScoredDataWikiData = {
  score?: number | null;
  data?: WikiData;
  vectors?: VectorData[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scoredDataWikiDataSchema: Schema<ScoredDataWikiData> = s.object<ScoredDataWikiData>(
  {
    score: s.optionalNullable(s.float64()),
    data: s.optional(s.lazy(() => wikiDataSchema)),
    vectors: s.optionalNullable(s.array(s.lazy(() => vectorDataSchema))),
  },
  { additionalProperties: s.json() },
);
