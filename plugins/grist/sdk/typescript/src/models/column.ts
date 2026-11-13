import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { getFieldsSchema, type GetFields } from "./get-fields.js";

export type Column = {
  id: string;
  fields: GetFields;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnSchema: Schema<Column> = s.object<Column>(
  {
    id: s.string(),
    fields: getFieldsSchema,
  },
  { additionalProperties: s.json() },
);
