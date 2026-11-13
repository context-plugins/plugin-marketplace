import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createFieldsSchema, type CreateFields } from "./create-fields.js";

export type Column3 = {
  /** Column identifier */
  id?: string;
  fields?: CreateFields;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const column3Schema: Schema<Column3> = s.object<Column3>(
  {
    id: s.optional(s.string()),
    fields: s.optional(s.lazy(() => createFieldsSchema)),
  },
  { additionalProperties: s.json() },
);
