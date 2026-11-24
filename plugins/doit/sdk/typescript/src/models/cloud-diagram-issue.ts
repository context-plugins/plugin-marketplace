import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Issue annotation linked to a component. */
export type CloudDiagramIssue = {
  /** Issue reference ID. */
  id?: string;
  /** Optional comment on the issue. */
  comment?: string;
  /** Snooze duration in seconds. */
  snoozed?: number;
  /** Linked Jira ticket key or URL. */
  jira?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramIssueSchema: Schema<CloudDiagramIssue> = s.object<CloudDiagramIssue>(
  {
    id: s.optional(s.string()),
    comment: s.optional(s.string()),
    snoozed: s.optional(s.float64()),
    jira: s.optional(s.string()),
    _keysMap: {
      id: "_id",
    },
  },
  { additionalProperties: s.json() },
);
