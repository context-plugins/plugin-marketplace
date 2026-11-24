import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerSchemaSchema, type SqlServerSchema } from "./sql-server-schema.js";

/** SQLServer database structure. */
export type SqlServerRdbms = {
  /** SQLServer schemas in the database server. */
  schemas?: SqlServerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerRdbmsSchema: Schema<SqlServerRdbms> = s.object<SqlServerRdbms>(
  {
    schemas: s.optional(s.array(s.lazy(() => sqlServerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
