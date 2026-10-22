import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confidenceFormulaSchema, type ConfidenceFormula } from "./confidence-formula.js";

export type FeedMethodologyResponse = {
  feedId: string;
  version: number;
  name: string;
  description: string;
  updateIntervalMs: number;
  deviationThresholdBps: number;
  confidenceFormula: ConfidenceFormula;
  computation?: Record<string, Record<string, unknown>>;
  canonicalJsonVersion?: string;
};

export const feedMethodologyResponseSchema: Schema<FeedMethodologyResponse> =
  s.object<FeedMethodologyResponse>({
    feedId: s.string(),
    version: s.int(),
    name: s.string(),
    description: s.string(),
    updateIntervalMs: s.int(),
    deviationThresholdBps: s.int(),
    confidenceFormula: confidenceFormulaSchema,
    computation: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    canonicalJsonVersion: s.optional(s.string()),
    _keysMap: {
      feedId: "feed_id",
      updateIntervalMs: "update_interval_ms",
      deviationThresholdBps: "deviation_threshold_bps",
      confidenceFormula: "confidence_formula",
      canonicalJsonVersion: "canonical_json_version",
    },
  });
