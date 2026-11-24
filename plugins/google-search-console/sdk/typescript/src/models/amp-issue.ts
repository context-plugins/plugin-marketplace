import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severity2Schema, type Severity2 } from "./severity2.js";

/** AMP issue. */
export type AmpIssue = {
  /** Severity of this issue: WARNING or ERROR. */
  severity?: Severity2;
  /** Brief description of this issue. */
  issueMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ampIssueSchema: Schema<AmpIssue> = s.object<AmpIssue>(
  {
    severity: s.optional(s.lazy(() => severity2Schema)),
    issueMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
