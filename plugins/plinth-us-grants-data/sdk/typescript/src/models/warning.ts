import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";

export type Warning = {
  parameter?: string;
  severity?: Severity;
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warningSchema: Schema<Warning> = s.object<Warning>(
  {
    parameter: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severitySchema)),
    reason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
