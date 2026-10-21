import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { validationIssueSchema, type ValidationIssue } from "../validation-issue.js";

/**
 * Current model lifecycle and seed policy findings for this historical version. llm-seed-deprecated
 * points to $.llm_config.seed when configured, including zero; unset/null seed does not produce a
 * warning. Saved Anthropic seed values also return llm-seed-unsupported. These findings do not
 * establish the endpoint or seed handling of historical requests.
 */
export type ValidationIssues6 = ValidationIssue[];

export const validationIssues6Schema: Schema<ValidationIssues6> = s.of<ValidationIssues6>(
  s.union([s.array(s.lazy(() => validationIssueSchema))]),
);
