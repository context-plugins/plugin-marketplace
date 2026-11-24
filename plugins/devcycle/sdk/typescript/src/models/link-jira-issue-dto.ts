import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinkJiraIssueDto = {
  issueId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkJiraIssueDtoSchema: Schema<LinkJiraIssueDto> = s.object<LinkJiraIssueDto>(
  {
    issueId: s.string(),
  },
  { additionalProperties: s.json() },
);
