import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlSchemaSchema, type PostgresqlSchema } from "./postgresql-schema.js";

/** Optional. PostgreSQL RDBMS to enrich with child data objects and metadata. */
export type PostgresqlRdbms2 = {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: PostgresqlSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlRdbms2Schema: Schema<PostgresqlRdbms2> = s.object<PostgresqlRdbms2>(
  {
    postgresqlSchemas: s.optional(s.array(s.lazy(() => postgresqlSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
