import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerSchemaSchema, type SqlServerSchema } from "./sql-server-schema.js";

/** The SQLServer objects to exclude from the stream. */
export type SqlServerRdbms4 = {
  /** SQLServer schemas in the database server. */
  schemas?: SqlServerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerRdbms4Schema: Schema<SqlServerRdbms4> = s.object<SqlServerRdbms4>(
  {
    schemas: s.optional(s.array(s.lazy(() => sqlServerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
