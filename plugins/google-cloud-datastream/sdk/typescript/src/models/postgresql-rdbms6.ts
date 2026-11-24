import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlSchemaSchema, type PostgresqlSchema } from "./postgresql-schema.js";

/** PostgreSQL data source objects to avoid backfilling. */
export type PostgresqlRdbms6 = {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: PostgresqlSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlRdbms6Schema: Schema<PostgresqlRdbms6> = s.object<PostgresqlRdbms6>(
  {
    postgresqlSchemas: s.optional(s.array(s.lazy(() => postgresqlSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
