import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormField = {
  id?: string;
  name?: string;
  type?: string;
  required?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formFieldSchema: Schema<FormField> = s.object<FormField>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    required: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
