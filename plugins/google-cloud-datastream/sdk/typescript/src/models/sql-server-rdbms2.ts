import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerSchemaSchema, type SqlServerSchema } from "./sql-server-schema.js";

/** Optional. SQLServer RDBMS to enrich with child data objects and metadata. */
export type SqlServerRdbms2 = {
  /** SQLServer schemas in the database server. */
  schemas?: SqlServerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerRdbms2Schema: Schema<SqlServerRdbms2> = s.object<SqlServerRdbms2>(
  {
    schemas: s.optional(s.array(s.lazy(() => sqlServerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
