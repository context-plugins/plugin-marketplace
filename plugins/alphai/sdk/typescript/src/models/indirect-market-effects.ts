import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IndirectMarketEffects = {
  sectorImplications?: string;
  regionalMarketImpact?: string;
  globalMarketRelevance?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indirectMarketEffectsSchema: Schema<IndirectMarketEffects> = s.object<IndirectMarketEffects>(
  {
    sectorImplications: s.optional(s.string()),
    regionalMarketImpact: s.optional(s.string()),
    globalMarketRelevance: s.optional(s.string()),
    _keysMap: {
      sectorImplications: "sector_implications",
      regionalMarketImpact: "regional_market_impact",
      globalMarketRelevance: "global_market_relevance",
    },
  },
  { additionalProperties: s.json() },
);
