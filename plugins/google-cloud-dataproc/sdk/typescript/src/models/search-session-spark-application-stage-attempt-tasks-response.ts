import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskDataSchema, type TaskData } from "./task-data.js";

/** List of tasks for a stage of a Spark Application */
export type SearchSessionSparkApplicationStageAttemptTasksResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSessionSparkApplicationStageAttemptTasksRequest.
   */
  nextPageToken?: string;
  /** Output only. Data corresponding to tasks created by spark. */
  sparkApplicationStageAttemptTasks?: TaskData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSessionSparkApplicationStageAttemptTasksResponseSchema: Schema<SearchSessionSparkApplicationStageAttemptTasksResponse> =
  s.object<SearchSessionSparkApplicationStageAttemptTasksResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationStageAttemptTasks: s.optional(s.array(s.lazy(() => taskDataSchema))),
    },
    { additionalProperties: s.json() },
  );
