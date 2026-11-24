import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WordsearchRequest = {
  /** Array of words to hide in the puzzle (3-20 words) */
  words: string;
  /** Grid size */
  size?: number;
  /** Difficulty level (affects word directions) */
  difficulty?: string;
  /** Set to true to generate a downloadable puzzle image */
  image?: boolean;
  /** Set to true to generate a downloadable solution image */
  solutionImage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WordsearchRequestSchema: Schema<V1WordsearchRequest> = s.object<V1WordsearchRequest>(
  {
    words: s.string(),
    size: s.optional(s.int()),
    difficulty: s.optional(s.string()),
    image: s.optional(s.boolean()),
    solutionImage: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
