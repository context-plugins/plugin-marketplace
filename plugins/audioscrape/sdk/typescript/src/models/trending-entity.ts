import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrendingEntity = {
  entityType: string;
  name: string;
  recentMentions: number;
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trendingEntitySchema: Schema<TrendingEntity> = s.object<TrendingEntity>(
  {
    entityType: s.string(),
    name: s.string(),
    recentMentions: s.int(),
    slug: s.string(),
    _keysMap: {
      entityType: "entity_type",
      recentMentions: "recent_mentions",
    },
  },
  { additionalProperties: s.json() },
);
