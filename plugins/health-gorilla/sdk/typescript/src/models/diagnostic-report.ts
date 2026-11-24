import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DiagnosticReport = {
  resourceType?: string;
  id?: string;
  status?: string;
  category?: Record<string, unknown>[];
  code?: Record<string, unknown>;
  subject?: Record<string, unknown>;
  effectiveDateTime?: Date;
  result?: Record<string, unknown>[];
  presentedForm?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const diagnosticReportSchema: Schema<DiagnosticReport> = s.object<DiagnosticReport>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    category: s.optional(s.array(s.record(s.string(), s.unknown()))),
    code: s.optional(s.record(s.string(), s.unknown())),
    subject: s.optional(s.record(s.string(), s.unknown())),
    effectiveDateTime: s.optional(s.dateTime()),
    result: s.optional(s.array(s.record(s.string(), s.unknown()))),
    presentedForm: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
