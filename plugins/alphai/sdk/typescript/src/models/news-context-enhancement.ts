import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { keyEntitySchema, type KeyEntity } from "./key-entity.js";

export type NewsContextEnhancement = {
  backgroundContext?: string;
  impactAnalysis?: string;
  keyEntities?: KeyEntity[];
  marketRelevanceSummary?: string;
  estimatedReadTimeMinutes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsContextEnhancementSchema: Schema<NewsContextEnhancement> = s.object<NewsContextEnhancement>(
  {
    backgroundContext: s.optional(s.string()),
    impactAnalysis: s.optional(s.string()),
    keyEntities: s.optional(s.array(s.lazy(() => keyEntitySchema))),
    marketRelevanceSummary: s.optional(s.string()),
    estimatedReadTimeMinutes: s.optional(s.int()),
    _keysMap: {
      backgroundContext: "background_context",
      impactAnalysis: "impact_analysis",
      keyEntities: "key_entities",
      marketRelevanceSummary: "market_relevance_summary",
      estimatedReadTimeMinutes: "estimated_read_time_minutes",
    },
  },
  { additionalProperties: s.json() },
);
