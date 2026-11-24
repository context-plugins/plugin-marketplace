import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsPrRow = {
  /** GitHub owner used for the request. */
  org: string;
  /** Repository name. */
  repo: string;
  /** Pull request number. */
  prNumber: number;
  /** GitHub login of the pull request author. */
  author: string;
  /** Pull request creation timestamp in ISO 8601 format. */
  createdAt: Date;
  /** Pull request merge timestamp in ISO 8601 format. */
  mergedAt: Date;
  /** Lines added in the pull request, or `null` when unavailable. */
  linesAdded: number | null;
  /** Lines deleted in the pull request, or `null` when unavailable. */
  linesDeleted: number | null;
  /** Posted cubic findings on the merged pull request, created within the requested date range. */
  numberOfCubicIssuesFlagged: number;
  /**
   * Posted findings in the requested date range with a detected code change (`aiAddressed = true`).
   * Positive feedback alone does not count as a fix, and downvotes do not erase detected fixes.
   */
  numberOfCubicIssuesFixed: number;
  /** Timestamp of the first completed cubic review for the pull request. */
  cubicFirstReviewedAt: Date;
  /**
   * AI-authored lines attributed to the pull request, capped at its total added and deleted lines;
   * null when no AI authorship data is available.
   */
  totalAiLinesAuthored: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsPrRowSchema: Schema<AnalyticsPrRow> = s.object<AnalyticsPrRow>(
  {
    org: s.string(),
    repo: s.string(),
    prNumber: s.int(),
    author: s.string(),
    createdAt: s.dateTime(),
    mergedAt: s.dateTime(),
    linesAdded: s.nullable(s.int()),
    linesDeleted: s.nullable(s.int()),
    numberOfCubicIssuesFlagged: s.int(),
    numberOfCubicIssuesFixed: s.int(),
    cubicFirstReviewedAt: s.dateTime(),
    totalAiLinesAuthored: s.nullable(s.int()),
  },
  { additionalProperties: s.json() },
);
