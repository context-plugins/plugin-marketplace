import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageDataSchema, type StageData } from "./stage-data.js";

/** A list of Stage Attempts for a Stage of a Spark Application. */
export type SearchSessionSparkApplicationStageAttemptsResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSessionSparkApplicationStageAttemptsRequest.
   */
  nextPageToken?: string;
  /** Output only. Data corresponding to a stage attempts */
  sparkApplicationStageAttempts?: StageData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSessionSparkApplicationStageAttemptsResponseSchema: Schema<SearchSessionSparkApplicationStageAttemptsResponse> =
  s.object<SearchSessionSparkApplicationStageAttemptsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationStageAttempts: s.optional(s.array(s.lazy(() => stageDataSchema))),
    },
    { additionalProperties: s.json() },
  );
