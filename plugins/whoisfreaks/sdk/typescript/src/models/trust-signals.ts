import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reputationIndicatorsSchema, type ReputationIndicators } from "./reputation-indicators.js";
import { reputationSignalsSchema, type ReputationSignals } from "./reputation-signals.js";

export type TrustSignals = {
  trustScore?: number;
  trustBand?: string;
  signals?: ReputationSignals;
  indicators?: ReputationIndicators;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trustSignalsSchema: Schema<TrustSignals> = s.object<TrustSignals>(
  {
    trustScore: s.optional(s.int()),
    trustBand: s.optional(s.string()),
    signals: s.optional(s.lazy(() => reputationSignalsSchema)),
    indicators: s.optional(s.lazy(() => reputationIndicatorsSchema)),
    _keysMap: {
      trustScore: "trust_score",
      trustBand: "trust_band",
    },
  },
  { additionalProperties: s.json() },
);
