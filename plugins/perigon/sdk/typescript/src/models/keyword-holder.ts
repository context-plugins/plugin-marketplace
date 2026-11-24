import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Keywords extracted from the article with their relevance weights. */
export type KeywordHolder = {
  /** Keyword extracted from the article. */
  name?: string | null;
  /** Relative relevance weight of the keyword. */
  weight?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keywordHolderSchema: Schema<KeywordHolder> = s.object<KeywordHolder>(
  {
    name: s.optionalNullable(s.string()),
    weight: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
