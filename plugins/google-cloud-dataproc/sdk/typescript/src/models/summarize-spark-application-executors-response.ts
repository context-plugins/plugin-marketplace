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
export type SummarizeSparkApplicationExecutorsResponse = {
  /** Consolidated summary for dead executors. */
  deadExecutorSummary?: ConsolidatedExecutorSummary3;
  /** Overall consolidated summary for all executors. */
  totalExecutorSummary?: ConsolidatedExecutorSummary2;
  /** Spark Application Id */
  applicationId?: string;
  /** Consolidated summary for active executors. */
  activeExecutorSummary?: ConsolidatedExecutorSummary1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizeSparkApplicationExecutorsResponseSchema: Schema<SummarizeSparkApplicationExecutorsResponse> =
  s.object<SummarizeSparkApplicationExecutorsResponse>(
    {
      deadExecutorSummary: s.optional(s.lazy(() => consolidatedExecutorSummary3Schema)),
      totalExecutorSummary: s.optional(s.lazy(() => consolidatedExecutorSummary2Schema)),
      applicationId: s.optional(s.string()),
      activeExecutorSummary: s.optional(s.lazy(() => consolidatedExecutorSummary1Schema)),
    },
    { additionalProperties: s.json() },
  );
