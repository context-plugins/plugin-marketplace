import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayRankingItem = {
  date: string;
  app: string;
  country: string;
  category: string;
  collection: string;
  rank: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playRankingItemSchema: Schema<PlayRankingItem> = s.object<PlayRankingItem>(
  {
    date: s.string(),
    app: s.string(),
    country: s.string(),
    category: s.string(),
    collection: s.string(),
    rank: s.int(),
  },
  { additionalProperties: s.json() },
);
