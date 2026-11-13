import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsFormsResponse = {
  /** Form fields indexed by field ID */
  formFieldsById?: Record<string, unknown>;
  /** JSON layout specification for the form */
  formLayoutSpec?: string;
  /** ID of the table the form submits to */
  formTableId?: string;
  /** Title of the form */
  formTitle?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsFormsResponseSchema: Schema<DocsFormsResponse> = s.object<DocsFormsResponse>(
  {
    formFieldsById: s.optional(s.record(s.string(), s.unknown())),
    formLayoutSpec: s.optional(s.string()),
    formTableId: s.optional(s.string()),
    formTitle: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
