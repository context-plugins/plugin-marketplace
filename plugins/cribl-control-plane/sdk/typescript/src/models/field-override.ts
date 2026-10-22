import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confidenceSchema, type Confidence } from "./confidence.js";
import { impactSchema, type Impact } from "./impact.js";
import { severitySchema, type Severity } from "./severity.js";

export type FieldOverride = {
  /** Unique identifier for the Detection Rule to override. */
  id: string;
  /** Severity level to assign to the Detection Rule. */
  severityId?: Severity;
  /** Confidence level to assign to the Detection Rule. */
  confidenceId?: Confidence;
  /** Impact level to assign to the Detection Rule. */
  impactId?: Impact;
  /** If <code>true</code>, the Detection Rule creates an alert. Otherwise, <code>false</code>. */
  isAlert?: boolean;
  /** Replacement alert message for the Detection Rule. */
  message?: string;
};

export const fieldOverrideSchema: Schema<FieldOverride> = s.object<FieldOverride>({
  id: s.string(),
  severityId: s.optional(s.lazy(() => severitySchema)),
  confidenceId: s.optional(s.lazy(() => confidenceSchema)),
  impactId: s.optional(s.lazy(() => impactSchema)),
  isAlert: s.optional(s.boolean()),
  message: s.optional(s.string()),
});
