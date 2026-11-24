import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Table-based query that fetches on a table instead of SQL */
export type Table = {
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableSchema: Schema<Table> = s.object<Table>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
