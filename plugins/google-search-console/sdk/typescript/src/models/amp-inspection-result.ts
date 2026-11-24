import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ampIndexStatusVerdictSchema, type AmpIndexStatusVerdict } from "./amp-index-status-verdict.js";
import { ampIssueSchema, type AmpIssue } from "./amp-issue.js";
import { indexingState1Schema, type IndexingState1 } from "./indexing-state1.js";
import { pageFetchState1Schema, type PageFetchState1 } from "./page-fetch-state1.js";
import { robotsTxtStateSchema, type RobotsTxtState } from "./robots-txt-state.js";
import { verdict2Schema, type Verdict2 } from "./verdict2.js";

/**
 * AMP inspection result of the live page or the current information from Google's index, depending
 * on whether you requested a live inspection or not.
 */
export type AmpInspectionResult = {
  /** Whether or not Google could fetch the AMP. */
  pageFetchState?: PageFetchState1;
  /**
   * Last time this AMP version was crawled by Google. Absent if the URL was never crawled
   * successfully.
   */
  lastCrawlTime?: string;
  /** A list of zero or more AMP issues found for the inspected URL. */
  issues?: AmpIssue[];
  /** Whether or not the page blocks indexing through a noindex rule. */
  indexingState?: IndexingState1;
  /** Index status of the AMP URL. */
  ampIndexStatusVerdict?: AmpIndexStatusVerdict;
  /**
   * URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP
   * version, the AMP version will be inspected.
   */
  ampUrl?: string;
  /**
   * The status of the most severe error on the page. If a page has both warnings and errors, the
   * page status is error. Error status means the page cannot be shown in Search results.
   */
  verdict?: Verdict2;
  /** Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState?: RobotsTxtState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ampInspectionResultSchema: Schema<AmpInspectionResult> = s.object<AmpInspectionResult>(
  {
    pageFetchState: s.optional(s.lazy(() => pageFetchState1Schema)),
    lastCrawlTime: s.optional(s.string()),
    issues: s.optional(s.array(s.lazy(() => ampIssueSchema))),
    indexingState: s.optional(s.lazy(() => indexingState1Schema)),
    ampIndexStatusVerdict: s.optional(s.lazy(() => ampIndexStatusVerdictSchema)),
    ampUrl: s.optional(s.string()),
    verdict: s.optional(s.lazy(() => verdict2Schema)),
    robotsTxtState: s.optional(s.lazy(() => robotsTxtStateSchema)),
  },
  { additionalProperties: s.json() },
);
