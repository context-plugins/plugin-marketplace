import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { validationIssueSchema, type ValidationIssue } from "../validation-issue.js";

/**
 * Current findings for the saved insight tool. Configured seed (including zero) returns
 * llm-seed-deprecated at $.tool_arguments.llm_config.seed; unset/null seed does not. Known
 * Anthropic seed restrictions are reported separately as llm-seed-unsupported. Seed warnings do not
 * block saves or establish past request handling. Model lifecycle findings are also included;
 * retired models block saves but can appear on reads. Explicitly projected lists can omit findings;
 * their absence does not establish that seed is unset or supported.
 */
export type ValidationIssues4 = ValidationIssue[];

export const validationIssues4Schema: Schema<ValidationIssues4> = s.of<ValidationIssues4>(
  s.union([s.array(s.lazy(() => validationIssueSchema))]),
);
