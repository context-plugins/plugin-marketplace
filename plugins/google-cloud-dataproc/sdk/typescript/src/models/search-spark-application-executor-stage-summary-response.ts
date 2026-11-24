import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorStageSummarySchema, type ExecutorStageSummary } from "./executor-stage-summary.js";

/** List of Executors associated with a Spark Application Stage. */
export type SearchSparkApplicationExecutorStageSummaryResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSparkApplicationExecutorsListRequest.
   */
  nextPageToken?: string;
  /** Details about executors used by the application stage. */
  sparkApplicationStageExecutors?: ExecutorStageSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSparkApplicationExecutorStageSummaryResponseSchema: Schema<SearchSparkApplicationExecutorStageSummaryResponse> =
  s.object<SearchSparkApplicationExecutorStageSummaryResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationStageExecutors: s.optional(s.array(s.lazy(() => executorStageSummarySchema))),
    },
    { additionalProperties: s.json() },
  );
