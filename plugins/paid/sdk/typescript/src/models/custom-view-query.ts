import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomViewQuery = {
  /** Stable identifier for this query's result set; the render bundle reads `data[<id>]`. */
  id: string;
  /**
   * A single ClickHouse SELECT (or WITH … SELECT). Do NOT add a customer filter — the database
   * scopes every query to the viewing customer at run time. Return clearly-named columns; bake any
   * date range into WHERE.
   */
  sql: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customViewQuerySchema: Schema<CustomViewQuery> = s.object<CustomViewQuery>(
  {
    id: s.string(),
    sql: s.string(),
  },
  { additionalProperties: s.json() },
);
