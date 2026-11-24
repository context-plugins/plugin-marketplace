import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lowConfidenceReasonSchema, type LowConfidenceReason } from "./low-confidence-reason.js";
import { reportSkipReasonSchema, type ReportSkipReason } from "./report-skip-reason.js";
import { reportSchema, type Report } from "./report.js";
import { resultSchema, type Result } from "./result.js";
import { segmentSchema, type Segment } from "./segment.js";
import { usageSchema, type Usage } from "./usage.js";
import { verdictSchema, type Verdict } from "./verdict.js";

export type ApiV1AidetectResponse = {
  /**
   * True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons.
   */
  lowConfidence?: boolean;
  /** short_text: under 500 characters. list_format: mostly bullet or numbered lines. */
  lowConfidenceReasons?: LowConfidenceReason[];
  /** The shareable report for this result (create_report: true), or null when none was made. */
  report?: Report;
  /**
   * Why report is null: nonpersist (team keeps no data), disabled (AI detector history off),
   * text_not_retained (history keeps no text), unconfirmed_email, quota (history full), unscorable,
   * error.
   */
  reportSkipReason?: ReportSkipReason;
  /**
   * Present only for a batch (`texts`) request: one entry per input text, in input order, each
   * shaped exactly like the single-text response.
   */
  results?: Result[];
  /**
   * Contiguous passages of sentences scoring >= 0.5, as character offsets into text, with their
   * length-weighted score. Absent when sentence offsets are unavailable.
   */
  segments?: Segment[];
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AidetectResponseSchema: Schema<ApiV1AidetectResponse> = s.object<ApiV1AidetectResponse>(
  {
    lowConfidence: s.optional(s.boolean()),
    lowConfidenceReasons: s.optional(s.array(s.lazy(() => lowConfidenceReasonSchema))),
    report: s.optional(s.lazy(() => reportSchema)),
    reportSkipReason: s.optional(s.lazy(() => reportSkipReasonSchema)),
    results: s.optional(s.array(s.lazy(() => resultSchema))),
    segments: s.optional(s.array(s.lazy(() => segmentSchema))),
    usage: s.optional(s.lazy(() => usageSchema)),
    verdict: s.optional(s.lazy(() => verdictSchema)),
    _keysMap: {
      lowConfidence: "low_confidence",
      lowConfidenceReasons: "low_confidence_reasons",
      reportSkipReason: "report_skip_reason",
    },
  },
  { additionalProperties: s.json() },
);
