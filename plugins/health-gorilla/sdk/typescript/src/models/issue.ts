import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Issue = {
  severity?: string;
  code?: string;
  diagnostics?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const issueSchema: Schema<Issue> = s.object<Issue>(
  {
    severity: s.optional(s.string()),
    code: s.optional(s.string()),
    diagnostics: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
