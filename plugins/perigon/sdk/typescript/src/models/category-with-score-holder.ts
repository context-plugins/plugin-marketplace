import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google Content Categories assigned to the article with confidence scores. */
export type CategoryWithScoreHolder = {
  /** Full taxonomy category path. */
  name?: string | null;
  /** Confidence score for the category assignment. */
  score?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryWithScoreHolderSchema: Schema<CategoryWithScoreHolder> =
  s.object<CategoryWithScoreHolder>(
    {
      name: s.optionalNullable(s.string()),
      score: s.optionalNullable(s.float64()),
    },
    { additionalProperties: s.json() },
  );
