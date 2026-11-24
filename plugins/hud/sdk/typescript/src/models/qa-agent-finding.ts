import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";
import { confidenceInternalSchema, confidenceSchema, type Confidence } from "./unions/confidence.js";
import { recommendedActionSchema, type RecommendedAction } from "./unions/recommended-action.js";

/** One actionable issue identified by a QA agent. */
export type QaAgentFinding = {
  findingType: string;
  severity: Severity;
  summary: string;
  confidence?: Confidence;
  evidenceRefs?: string[];
  recommendedAction?: RecommendedAction;
  metadata?: Record<string, unknown>;
};

const qaAgentFindingProperties: s.Shape<QaAgentFinding> = {
  findingType: s.string(),
  severity: severitySchema,
  summary: s.string(),
  confidence: s.optional(s.lazy(() => confidenceInternalSchema)),
  evidenceRefs: s.optional(s.array(s.string())),
  recommendedAction: s.optional(s.lazy(() => recommendedActionSchema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    findingType: "finding_type",
    evidenceRefs: "evidence_refs",
    recommendedAction: "recommended_action",
  },
};

export const qaAgentFindingInternalSchema: Schema<QaAgentFinding> =
  s.object<QaAgentFinding>(qaAgentFindingProperties);

export const qaAgentFindingSchema: Schema<QaAgentFinding> = s.lazySchema(() =>
  s.object<QaAgentFinding>({
    ...qaAgentFindingProperties,
    confidence: s.optional(s.lazy(() => confidenceSchema)),
  }),
);
