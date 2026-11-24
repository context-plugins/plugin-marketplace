import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dgaScoreSchema, type DgaScore } from "./dga-score.js";
import { domainReputationInputSchema, type DomainReputationInput } from "./domain-reputation-input.js";
import { evidenceSummarySchema, type EvidenceSummary } from "./evidence-summary.js";
import { reputationIntelligenceSchema, type ReputationIntelligence } from "./reputation-intelligence.js";
import { riskCategorySchema, type RiskCategory } from "./risk-category.js";
import { trustSignalsSchema, type TrustSignals } from "./trust-signals.js";

export type DomainReputationResponse = {
  input?: DomainReputationInput;
  assessedAt?: string;
  version?: string;
  processingTimeMs?: number;
  riskCategory?: RiskCategory;
  dgaScore?: DgaScore;
  trustSignals?: TrustSignals;
  intelligence?: ReputationIntelligence;
  evidenceSummary?: EvidenceSummary;
  errors?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainReputationResponseSchema: Schema<DomainReputationResponse> =
  s.object<DomainReputationResponse>(
    {
      input: s.optional(s.lazy(() => domainReputationInputSchema)),
      assessedAt: s.optional(s.string()),
      version: s.optional(s.string()),
      processingTimeMs: s.optional(s.int()),
      riskCategory: s.optional(s.lazy(() => riskCategorySchema)),
      dgaScore: s.optional(s.lazy(() => dgaScoreSchema)),
      trustSignals: s.optional(s.lazy(() => trustSignalsSchema)),
      intelligence: s.optional(s.lazy(() => reputationIntelligenceSchema)),
      evidenceSummary: s.optional(s.lazy(() => evidenceSummarySchema)),
      errors: s.optional(s.array(s.string())),
      _keysMap: {
        assessedAt: "assessed_at",
        processingTimeMs: "processing_time_ms",
        riskCategory: "risk_category",
        dgaScore: "dga_score",
        trustSignals: "trust_signals",
        evidenceSummary: "evidence_summary",
      },
    },
    { additionalProperties: s.json() },
  );
