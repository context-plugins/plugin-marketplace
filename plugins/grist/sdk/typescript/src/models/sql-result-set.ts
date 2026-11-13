import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { record5Schema, type Record5 } from "./record5.js";

export type SqlResultSet = {
  /** A copy of the SQL statement. */
  statement: string;
  records: Record5[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlResultSetSchema: Schema<SqlResultSet> = s.object<SqlResultSet>(
  {
    statement: s.string(),
    records: s.array(s.lazy(() => record5Schema)),
  },
  { additionalProperties: s.json() },
);
