import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { issueTypeSchema, type IssueType } from "./issue-type.js";
import { severitySchema, type Severity } from "./severity.js";

/** Mobile-usability issue. */
export type MobileUsabilityIssue = {
  /** Mobile-usability issue type. */
  issueType?: IssueType;
  /** Not returned; reserved for future use. */
  severity?: Severity;
  /** Additional information regarding the issue. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mobileUsabilityIssueSchema: Schema<MobileUsabilityIssue> = s.object<MobileUsabilityIssue>(
  {
    issueType: s.optional(s.lazy(() => issueTypeSchema)),
    severity: s.optional(s.lazy(() => severitySchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
