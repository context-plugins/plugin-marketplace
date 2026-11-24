import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard raw SQL query */
export type Raw = {
  sql: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rawSchema: Schema<Raw> = s.object<Raw>(
  {
    sql: s.string(),
  },
  { additionalProperties: s.json() },
);
