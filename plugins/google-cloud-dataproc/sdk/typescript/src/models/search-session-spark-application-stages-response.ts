import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageDataSchema, type StageData } from "./stage-data.js";

/** A list of stages associated with a Spark Application. */
export type SearchSessionSparkApplicationStagesResponse = {
  /** Output only. Data corresponding to a stage. */
  sparkApplicationStages?: StageData[];
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSessionSparkApplicationStages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSessionSparkApplicationStagesResponseSchema: Schema<SearchSessionSparkApplicationStagesResponse> =
  s.object<SearchSessionSparkApplicationStagesResponse>(
    {
      sparkApplicationStages: s.optional(s.array(s.lazy(() => stageDataSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
