import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlSchemaSchema, type PostgresqlSchema } from "./postgresql-schema.js";

/** The PostgreSQL objects to include in the stream. */
export type PostgresqlRdbms3 = {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: PostgresqlSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlRdbms3Schema: Schema<PostgresqlRdbms3> = s.object<PostgresqlRdbms3>(
  {
    postgresqlSchemas: s.optional(s.array(s.lazy(() => postgresqlSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
