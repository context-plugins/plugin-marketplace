import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fields1Schema, type Fields1 } from "./fields1.js";

export type Table3 = {
  /** Current table identifier */
  id: string;
  fields: Fields1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const table3Schema: Schema<Table3> = s.object<Table3>(
  {
    id: s.string(),
    fields: fields1Schema,
  },
  { additionalProperties: s.json() },
);
