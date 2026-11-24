import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ruleSchema, type Rule } from "./rule.js";

/** Mobile-friendly issue. */
export type MobileFriendlyIssue = {
  /** Rule violated. */
  rule?: Rule;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mobileFriendlyIssueSchema: Schema<MobileFriendlyIssue> = s.object<MobileFriendlyIssue>(
  {
    rule: s.optional(s.lazy(() => ruleSchema)),
  },
  { additionalProperties: s.json() },
);
