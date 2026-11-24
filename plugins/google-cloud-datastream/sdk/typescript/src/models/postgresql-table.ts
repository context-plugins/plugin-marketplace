import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlColumnSchema, type PostgresqlColumn } from "./postgresql-column.js";

/** PostgreSQL table. */
export type PostgresqlTable = {
  /** The table name. */
  table?: string;
  /**
   * PostgreSQL columns in the schema. When unspecified as part of include/exclude objects,
   * includes/excludes everything.
   */
  postgresqlColumns?: PostgresqlColumn[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlTableSchema: Schema<PostgresqlTable> = s.object<PostgresqlTable>(
  {
    table: s.optional(s.string()),
    postgresqlColumns: s.optional(s.array(s.lazy(() => postgresqlColumnSchema))),
  },
  { additionalProperties: s.json() },
);
