import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  consolidatedExecutorSummary1Schema,
  type ConsolidatedExecutorSummary1,
} from "./consolidated-executor-summary1.js";
import {
  consolidatedExecutorSummary2Schema,
  type ConsolidatedExecutorSummary2,
} from "./consolidated-executor-summary2.js";
import {
  consolidatedExecutorSummary3Schema,
  type ConsolidatedExecutorSummary3,
} from "./consolidated-executor-summary3.js";

/** Consolidated summary of executors for a Spark Application. */
export type SummarizeSessionSparkApplicationExecutorsResponse = {
  /** Consolidated summary for active executors. */
  activeExecutorSummary?: ConsolidatedExecutorSummary1;
  /** Overall consolidated summary for all executors. */
  totalExecutorSummary?: ConsolidatedExecutorSummary2;
  /** Consolidated summary for dead executors. */
  deadExecutorSummary?: ConsolidatedExecutorSummary3;
  /** Spark Application Id */
  applicationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizeSessionSparkApplicationExecutorsResponseSchema: Schema<SummarizeSessionSparkApplicationExecutorsResponse> =
  s.object<SummarizeSessionSparkApplicationExecutorsResponse>(
    {
      activeExecutorSummary: s.optional(s.lazy(() => consolidatedExecutorSummary1Schema)),
      totalExecutorSummary: s.optional(s.lazy(() => consolidatedExecutorSummary2Schema)),
      deadExecutorSummary: s.optional(s.lazy(() => consolidatedExecutorSummary3Schema)),
      applicationId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
