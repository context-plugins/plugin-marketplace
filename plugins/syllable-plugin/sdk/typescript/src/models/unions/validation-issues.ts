import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { validationIssueSchema, type ValidationIssue } from "../validation-issue.js";

/**
 * Validation issues found in the tool definition. Warnings and infos are informational; errors
 * block the save.
 */
export type ValidationIssues = ValidationIssue[];

export const validationIssuesSchema: Schema<ValidationIssues> = s.of<ValidationIssues>(
  s.union([s.array(s.lazy(() => validationIssueSchema))]),
);
