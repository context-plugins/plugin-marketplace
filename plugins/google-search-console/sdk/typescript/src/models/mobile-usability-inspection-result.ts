import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mobileUsabilityIssueSchema, type MobileUsabilityIssue } from "./mobile-usability-issue.js";
import { verdictSchema, type Verdict } from "./verdict.js";

/** Mobile-usability inspection results. */
export type MobileUsabilityInspectionResult = {
  /** High-level mobile-usability inspection result for this URL. */
  verdict?: Verdict;
  /** A list of zero or more mobile-usability issues detected for this URL. */
  issues?: MobileUsabilityIssue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mobileUsabilityInspectionResultSchema: Schema<MobileUsabilityInspectionResult> =
  s.object<MobileUsabilityInspectionResult>(
    {
      verdict: s.optional(s.lazy(() => verdictSchema)),
      issues: s.optional(s.array(s.lazy(() => mobileUsabilityIssueSchema))),
    },
    { additionalProperties: s.json() },
  );
