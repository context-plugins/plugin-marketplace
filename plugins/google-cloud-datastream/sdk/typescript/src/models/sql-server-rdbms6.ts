import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerSchemaSchema, type SqlServerSchema } from "./sql-server-schema.js";

/** SQLServer data source objects to avoid backfilling */
export type SqlServerRdbms6 = {
  /** SQLServer schemas in the database server. */
  schemas?: SqlServerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerRdbms6Schema: Schema<SqlServerRdbms6> = s.object<SqlServerRdbms6>(
  {
    schemas: s.optional(s.array(s.lazy(() => sqlServerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
