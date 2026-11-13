import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { getFieldsSchema, type GetFields } from "./get-fields.js";

export type Column2 = {
  id?: string;
  fields?: GetFields;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const column2Schema: Schema<Column2> = s.object<Column2>(
  {
    id: s.optional(s.string()),
    fields: s.optional(s.lazy(() => getFieldsSchema)),
  },
  { additionalProperties: s.json() },
);
