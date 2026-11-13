import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fields2Schema, type Fields2 } from "./fields2.js";

export type Column4 = {
  /** Column identifier */
  id: string;
  fields: Fields2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const column4Schema: Schema<Column4> = s.object<Column4>(
  {
    id: s.string(),
    fields: fields2Schema,
  },
  { additionalProperties: s.json() },
);
