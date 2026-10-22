import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { validationIssueSchema, type ValidationIssue } from "../validation-issue.js";

/**
 * Non-blocking findings for the saved agent (e.g. a deprecated STT provider warning). Warnings and
 * infos are informational; errors block the save.
 */
export type ValidationIssues3 = ValidationIssue[];

export const validationIssues3Schema: Schema<ValidationIssues3> = s.of<ValidationIssues3>(
  s.union([s.array(s.lazy(() => validationIssueSchema))]),
);
