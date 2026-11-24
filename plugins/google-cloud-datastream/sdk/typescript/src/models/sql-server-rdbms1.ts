import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerSchemaSchema, type SqlServerSchema } from "./sql-server-schema.js";

/** Enriched SQLServer RDBMS object. */
export type SqlServerRdbms1 = {
  /** SQLServer schemas in the database server. */
  schemas?: SqlServerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerRdbms1Schema: Schema<SqlServerRdbms1> = s.object<SqlServerRdbms1>(
  {
    schemas: s.optional(s.array(s.lazy(() => sqlServerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
