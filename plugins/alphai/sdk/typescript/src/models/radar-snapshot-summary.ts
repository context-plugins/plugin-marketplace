import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RadarSnapshotSummary = {
  activeTickers: number;
  scoredTickers: number;
  elevatedTickers: number;
  verifiedCandidates: number;
  collectionUnverified: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarSnapshotSummarySchema: Schema<RadarSnapshotSummary> = s.object<RadarSnapshotSummary>(
  {
    activeTickers: s.int(),
    scoredTickers: s.int(),
    elevatedTickers: s.int(),
    verifiedCandidates: s.int(),
    collectionUnverified: s.int(),
    _keysMap: {
      activeTickers: "active_tickers",
      scoredTickers: "scored_tickers",
      elevatedTickers: "elevated_tickers",
      verifiedCandidates: "verified_candidates",
      collectionUnverified: "collection_unverified",
    },
  },
  { additionalProperties: s.json() },
);
