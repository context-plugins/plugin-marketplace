import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JiraIssueLink = {
  issueId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jiraIssueLinkSchema: Schema<JiraIssueLink> = s.object<JiraIssueLink>(
  {
    issueId: s.string(),
  },
  { additionalProperties: s.json() },
);
