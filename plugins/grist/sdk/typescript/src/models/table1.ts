import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Table1 = {
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const table1Schema: Schema<Table1> = s.object<Table1>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
