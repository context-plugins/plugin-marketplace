import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severity1Schema, type Severity1 } from "./severity1.js";

/** Severity and status of a single issue affecting a single rich result instance on a page. */
export type RichResultsIssue = {
  /** Rich Results issue type. */
  issueMessage?: string;
  /**
   * Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear
   * with rich result features in Google Search results.
   */
  severity?: Severity1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const richResultsIssueSchema: Schema<RichResultsIssue> = s.object<RichResultsIssue>(
  {
    issueMessage: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severity1Schema)),
  },
  { additionalProperties: s.json() },
);
