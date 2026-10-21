import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Latest = {
  feedId: string;
  value: string;
  confidence: number;
  completeness: number;
  freshnessMs: number;
  stalenessRisk: string;
  computedAt: string;
  signer: string;
  signature: string;
};

export const latestSchema: Schema<Latest> = s.object<Latest>({
  feedId: s.string(),
  value: s.string(),
  confidence: s.float64(),
  completeness: s.float64(),
  freshnessMs: s.int(),
  stalenessRisk: s.string(),
  computedAt: s.string(),
  signer: s.string(),
  signature: s.string(),
  _keysMap: {
    feedId: "feed_id",
    freshnessMs: "freshness_ms",
    stalenessRisk: "staleness_risk",
    computedAt: "computed_at",
  },
});
