import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commuteInfo1Schema, type CommuteInfo1 } from "./commute-info1.js";
import { job1Schema, type Job1 } from "./job1.js";

/** Job entry with metadata inside SearchJobsResponse. */
export type MatchingJob = {
  /**
   * Contains snippets of text from the Job.title field most closely matching a search query's
   * keywords, if available. The matching query keywords are enclosed in HTML bold tags.
   */
  jobTitleSnippet?: string;
  /** Commute information which is generated based on specified CommuteFilter. */
  commuteInfo?: CommuteInfo1;
  /**
   * A summary of the job with core information that's displayed on the search results listing page.
   */
  jobSummary?: string;
  /** Job resource that matches the specified SearchJobsRequest. */
  job?: Job1;
  /**
   * Contains snippets of text from the Job.description and similar fields that most closely match a
   * search query's keywords, if available. All HTML tags in the original fields are stripped when
   * returned in this field, and matching query keywords are enclosed in HTML bold tags.
   */
  searchTextSnippet?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchingJobSchema: Schema<MatchingJob> = s.object<MatchingJob>(
  {
    jobTitleSnippet: s.optional(s.string()),
    commuteInfo: s.optional(s.lazy(() => commuteInfo1Schema)),
    jobSummary: s.optional(s.string()),
    job: s.optional(s.lazy(() => job1Schema)),
    searchTextSnippet: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
