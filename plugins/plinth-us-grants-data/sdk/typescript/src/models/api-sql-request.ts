import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiSqlRequest = {
  /** A single read-only SELECT (or WITH ... SELECT) statement. */
  sql: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiSqlRequestSchema: Schema<ApiSqlRequest> = s.object<ApiSqlRequest>(
  {
    sql: s.string(),
  },
  { additionalProperties: s.json() },
);
