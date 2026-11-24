import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorSummarySchema, type ExecutorSummary } from "./executor-summary.js";

/** List of Executors associated with a Spark Application. */
export type SearchSessionSparkApplicationExecutorsResponse = {
  /** Details about executors used by the application. */
  sparkApplicationExecutors?: ExecutorSummary[];
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSessionSparkApplicationExecutorsRequest.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSessionSparkApplicationExecutorsResponseSchema: Schema<SearchSessionSparkApplicationExecutorsResponse> =
  s.object<SearchSessionSparkApplicationExecutorsResponse>(
    {
      sparkApplicationExecutors: s.optional(s.array(s.lazy(() => executorSummarySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
