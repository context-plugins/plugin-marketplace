import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormSubmission = {
  tableId?: string;
  viewId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formSubmissionSchema: Schema<FormSubmission> = s.object<FormSubmission>(
  {
    tableId: s.optional(s.string()),
    viewId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
