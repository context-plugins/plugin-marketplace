import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlSchemaSchema, type PostgresqlSchema } from "./postgresql-schema.js";

/** PostgreSQL database structure. */
export type PostgresqlRdbms = {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: PostgresqlSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlRdbmsSchema: Schema<PostgresqlRdbms> = s.object<PostgresqlRdbms>(
  {
    postgresqlSchemas: s.optional(s.array(s.lazy(() => postgresqlSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
