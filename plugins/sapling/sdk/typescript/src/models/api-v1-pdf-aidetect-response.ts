import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lowConfidenceReasonSchema, type LowConfidenceReason } from "./low-confidence-reason.js";
import { segmentSchema, type Segment } from "./segment.js";
import { sentenceScoreSchema, type SentenceScore } from "./sentence-score.js";
import { usageSchema, type Usage } from "./usage.js";
import { verdictSchema, type Verdict } from "./verdict.js";

export type ApiV1PdfAidetectResponse = {
  /**
   * Share (0-1) of the text in sentences scoring >= 0.5; reports partially AI-written documents
   * whose overall score stays below 0.5.
   */
  aiFraction?: number;
  /**
   * True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons.
   */
  lowConfidence?: boolean;
  /** short_text: under 500 characters. list_format: mostly bullet or numbered lines. */
  lowConfidenceReasons?: LowConfidenceReason[];
  score?: number;
  scoreString?: string;
  /**
   * Contiguous passages of sentences scoring >= 0.5, as character offsets into text, with their
   * length-weighted score. Absent when sentence offsets are unavailable.
   */
  segments?: Segment[];
  sentenceScores?: SentenceScore[];
  text?: string;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /**
   * Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the
   * overall score is >= 0.5 with less than 80% of the text scoring as AI. Absent if the text could
   * not be scored.
   */
  verdict?: Verdict;
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PdfAidetectResponseSchema: Schema<ApiV1PdfAidetectResponse> =
  s.object<ApiV1PdfAidetectResponse>(
    {
      aiFraction: s.optional(s.float64()),
      lowConfidence: s.optional(s.boolean()),
      lowConfidenceReasons: s.optional(s.array(s.lazy(() => lowConfidenceReasonSchema))),
      score: s.optional(s.float64()),
      scoreString: s.optional(s.string()),
      segments: s.optional(s.array(s.lazy(() => segmentSchema))),
      sentenceScores: s.optional(s.array(s.lazy(() => sentenceScoreSchema))),
      text: s.optional(s.string()),
      usage: s.optional(s.lazy(() => usageSchema)),
      verdict: s.optional(s.lazy(() => verdictSchema)),
      version: s.optional(s.string()),
      _keysMap: {
        aiFraction: "ai_fraction",
        lowConfidence: "low_confidence",
        lowConfidenceReasons: "low_confidence_reasons",
        scoreString: "score_string",
        sentenceScores: "sentence_scores",
      },
    },
    { additionalProperties: s.json() },
  );
