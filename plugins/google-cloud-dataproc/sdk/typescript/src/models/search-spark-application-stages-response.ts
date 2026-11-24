import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageDataSchema, type StageData } from "./stage-data.js";

/** A list of stages associated with a Spark Application. */
export type SearchSparkApplicationStagesResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent SearchSparkApplicationStages.
   */
  nextPageToken?: string;
  /** Output only. Data corresponding to a stage. */
  sparkApplicationStages?: StageData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSparkApplicationStagesResponseSchema: Schema<SearchSparkApplicationStagesResponse> =
  s.object<SearchSparkApplicationStagesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationStages: s.optional(s.array(s.lazy(() => stageDataSchema))),
    },
    { additionalProperties: s.json() },
  );
