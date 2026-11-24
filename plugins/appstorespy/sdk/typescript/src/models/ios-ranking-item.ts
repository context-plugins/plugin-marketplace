import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosRankingItem = {
  date: string;
  app: string;
  platform: string;
  country: string;
  category: string;
  collection: string;
  rank: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosRankingItemSchema: Schema<IosRankingItem> = s.object<IosRankingItem>(
  {
    date: s.string(),
    app: s.string(),
    platform: s.string(),
    country: s.string(),
    category: s.string(),
    collection: s.string(),
    rank: s.int(),
  },
  { additionalProperties: s.json() },
);
