import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerTableSchema, type SqlServerTable } from "./sql-server-table.js";

/** SQLServer schema. */
export type SqlServerSchema = {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  tables?: SqlServerTable[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerSchemaSchema: Schema<SqlServerSchema> = s.object<SqlServerSchema>(
  {
    schema: s.optional(s.string()),
    tables: s.optional(s.array(s.lazy(() => sqlServerTableSchema))),
  },
  { additionalProperties: s.json() },
);
