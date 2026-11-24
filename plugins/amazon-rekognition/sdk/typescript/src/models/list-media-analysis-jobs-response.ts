import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mediaAnalysisJobDescriptionSchema,
  type MediaAnalysisJobDescription,
} from "./media-analysis-job-description.js";

export type ListMediaAnalysisJobsResponse = {
  /** Pagination token, if the previous response was incomplete. */
  nextToken?: string;
  /** Contains a list of all media analysis jobs. */
  mediaAnalysisJobs: MediaAnalysisJobDescription[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMediaAnalysisJobsResponseSchema: Schema<ListMediaAnalysisJobsResponse> =
  s.object<ListMediaAnalysisJobsResponse>(
    {
      nextToken: s.optional(s.string()),
      mediaAnalysisJobs: s.array(s.lazy(() => mediaAnalysisJobDescriptionSchema)),
      _keysMap: {
        nextToken: "NextToken",
        mediaAnalysisJobs: "MediaAnalysisJobs",
      },
    },
    { additionalProperties: s.json() },
  );
