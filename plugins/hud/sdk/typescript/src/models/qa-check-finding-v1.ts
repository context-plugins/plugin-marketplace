import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";
import { confidenceInternalSchema, confidenceSchema, type Confidence } from "./unions/confidence.js";
import { recommendedActionSchema, type RecommendedAction } from "./unions/recommended-action.js";

/** One actionable issue a QA check identified. */
export type QaCheckFindingV1 = {
  findingType: string;
  severity: Severity;
  summary: string;
  confidence?: Confidence;
  evidenceRefs?: string[];
  recommendedAction?: RecommendedAction;
  metadata?: Record<string, unknown>;
};

const qaCheckFindingV1Properties: s.Shape<QaCheckFindingV1> = {
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

export const qaCheckFindingV1InternalSchema: Schema<QaCheckFindingV1> =
  s.object<QaCheckFindingV1>(qaCheckFindingV1Properties);

export const qaCheckFindingV1Schema: Schema<QaCheckFindingV1> = s.lazySchema(() =>
  s.object<QaCheckFindingV1>({
    ...qaCheckFindingV1Properties,
    confidence: s.optional(s.lazy(() => confidenceSchema)),
  }),
);
