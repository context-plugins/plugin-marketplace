import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { argSchema, type Arg } from "./unions/arg.js";

export type DocsSqlRequest = {
  /**
   * The SQL query to run. Must be a single SELECT statement, with no trailing semicolon. WITH
   * clauses are permitted. All Grist documents are currently SQLite databases, and the SQL query is
   * interpreted and run by SQLite, with various defensive measures. Statements that would modify
   * the database are not supported.
   */
  sql: string;
  /** Parameters for the query. */
  args?: Arg[];
  /**
   * Timeout after which operations on the document will be interrupted. Specified in milliseconds.
   * Defaults to 1000 (1 second). This default is controlled by an optional environment variable
   * read by the Grist app, GRIST_SQL_TIMEOUT_MSEC. The default cannot be exceeded, only reduced.
   */
  timeout?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSqlRequestSchema: Schema<DocsSqlRequest> = s.object<DocsSqlRequest>(
  {
    sql: s.string(),
    args: s.optional(s.array(s.lazy(() => argSchema))),
    timeout: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
