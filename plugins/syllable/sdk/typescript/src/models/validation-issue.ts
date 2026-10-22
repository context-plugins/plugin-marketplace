import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Severity, severitySchema } from "./severity.js";
import { path1Schema, type Path1 } from "./unions/path1.js";
import { value6Schema, type Value6 } from "./unions/value6.js";

/** A single validation finding with severity, location, and description. */
export type ValidationIssue = {
  /** Stable machine-readable identifier (kebab-case) */
  id: string;
  /** @default Severity.Error */
  severity?: Severity;
  /** Human-readable description */
  message: string;
  /** JSONPath-style location (e.g. $.context.task.steps[2]) */
  path?: Path1;
  /** The offending value, when it adds clarity */
  value?: Value6;
};

export const validationIssueSchema: Schema<ValidationIssue> = s.object<ValidationIssue>({
  id: s.string(),
  severity: s.defaulted(severitySchema, Severity.Error),
  message: s.string(),
  path: s.optional(s.lazy(() => path1Schema)),
  value: s.optional(s.lazy(() => value6Schema)),
});
