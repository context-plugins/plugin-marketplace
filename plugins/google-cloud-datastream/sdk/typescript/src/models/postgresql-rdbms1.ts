import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlSchemaSchema, type PostgresqlSchema } from "./postgresql-schema.js";

/** Enriched PostgreSQL RDBMS object. */
export type PostgresqlRdbms1 = {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: PostgresqlSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlRdbms1Schema: Schema<PostgresqlRdbms1> = s.object<PostgresqlRdbms1>(
  {
    postgresqlSchemas: s.optional(s.array(s.lazy(() => postgresqlSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
