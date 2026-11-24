import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlTableSchema, type PostgresqlTable } from "./postgresql-table.js";

/** PostgreSQL schema. */
export type PostgresqlSchema = {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  postgresqlTables?: PostgresqlTable[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlSchemaSchema: Schema<PostgresqlSchema> = s.object<PostgresqlSchema>(
  {
    schema: s.optional(s.string()),
    postgresqlTables: s.optional(s.array(s.lazy(() => postgresqlTableSchema))),
  },
  { additionalProperties: s.json() },
);
