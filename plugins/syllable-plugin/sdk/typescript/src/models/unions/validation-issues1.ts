import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { validationIssueSchema, type ValidationIssue } from "../validation-issue.js";

/**
 * Current findings for the saved prompt. Configured seed (including zero) returns
 * llm-seed-deprecated at $.llm_config.seed; unset/null seed does not. Seed warnings do not block
 * saves or establish past request handling. Saved Anthropic seed values also return
 * llm-seed-unsupported; existing save restrictions still apply. Model lifecycle findings are also
 * included; retired models block saves but can appear on reads. Findings are populated by
 * standalone Prompt saves and full list/detail reads. Explicitly projected lists and prompts
 * embedded in Agent or Channel responses can omit findings; their absence does not establish that
 * seed is unset or supported.
 */
export type ValidationIssues1 = ValidationIssue[];

export const validationIssues1Schema: Schema<ValidationIssues1> = s.of<ValidationIssues1>(
  s.union([s.array(s.lazy(() => validationIssueSchema))]),
);
