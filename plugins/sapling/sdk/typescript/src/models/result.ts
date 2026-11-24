import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lowConfidenceReasonSchema, type LowConfidenceReason } from "./low-confidence-reason.js";
import { segmentSchema, type Segment } from "./segment.js";
import { verdictSchema, type Verdict } from "./verdict.js";

export type Result = {
  /**
   * True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons.
   */
  lowConfidence?: boolean;
  /** short_text: under 500 characters. list_format: mostly bullet or numbered lines. */
  lowConfidenceReasons?: LowConfidenceReason[];
  /**
   * Contiguous passages of sentences scoring >= 0.5, as character offsets into text, with their
   * length-weighted score. Absent when sentence offsets are unavailable.
   */
  segments?: Segment[];
  /**
   * Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the
   * overall score is >= 0.5 with less than 80% of the text scoring as AI. Absent if the text could
   * not be scored.
   */
  verdict?: Verdict;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    lowConfidence: s.optional(s.boolean()),
    lowConfidenceReasons: s.optional(s.array(s.lazy(() => lowConfidenceReasonSchema))),
    segments: s.optional(s.array(s.lazy(() => segmentSchema))),
    verdict: s.optional(s.lazy(() => verdictSchema)),
    _keysMap: {
      lowConfidence: "low_confidence",
      lowConfidenceReasons: "low_confidence_reasons",
    },
  },
  { additionalProperties: s.json() },
);
