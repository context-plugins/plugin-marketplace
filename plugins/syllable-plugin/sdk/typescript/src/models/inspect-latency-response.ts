import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latencyEntrySchema, type LatencyEntry } from "./latency-entry.js";
import { summaryEntrySchema, type SummaryEntry } from "./summary-entry.js";

/**
 * This is a report of the time spent in each operation during this session. It contains a timeline,
 * which lists the operations in the order they were executed, and a summary, which aggregates the
 * operations by category and sub-category.
 */
export type InspectLatencyResponse = {
  sessionId: string;
  timeline: LatencyEntry[];
  summary?: SummaryEntry[];
};

export const inspectLatencyResponseSchema: Schema<InspectLatencyResponse> = s.object<InspectLatencyResponse>({
  sessionId: s.string(),
  timeline: s.array(s.lazy(() => latencyEntrySchema)),
  summary: s.optional(s.array(s.lazy(() => summaryEntrySchema))),
  _keysMap: {
    sessionId: "session_id",
  },
});
