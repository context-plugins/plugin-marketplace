import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { validationIssueSchema, type ValidationIssue } from "../validation-issue.js";

/**
 * Non-blocking findings for the saved voice group (e.g. a deprecated voice warning). Warnings and
 * infos are informational; errors block the save.
 */
export type ValidationIssues2 = ValidationIssue[];

export const validationIssues2Schema: Schema<ValidationIssues2> = s.of<ValidationIssues2>(
  s.union([s.array(s.lazy(() => validationIssueSchema))]),
);
