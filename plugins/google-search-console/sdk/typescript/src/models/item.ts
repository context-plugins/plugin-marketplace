import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { richResultsIssueSchema, type RichResultsIssue } from "./rich-results-issue.js";

/** A specific rich result found on the page. */
export type Item = {
  /** A list of zero or more rich result issues found for this instance. */
  issues?: RichResultsIssue[];
  /** The user-provided name of this item. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    issues: s.optional(s.array(s.lazy(() => richResultsIssueSchema))),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
