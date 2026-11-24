import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkApplicationSchema, type SparkApplication } from "./spark-application.js";

/** A list of summary of Spark Applications */
export type SearchSparkApplicationsResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent SearchSparkApplicationsRequest.
   */
  nextPageToken?: string;
  /** Output only. High level information corresponding to an application. */
  sparkApplications?: SparkApplication[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSparkApplicationsResponseSchema: Schema<SearchSparkApplicationsResponse> =
  s.object<SearchSparkApplicationsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplications: s.optional(s.array(s.lazy(() => sparkApplicationSchema))),
    },
    { additionalProperties: s.json() },
  );
