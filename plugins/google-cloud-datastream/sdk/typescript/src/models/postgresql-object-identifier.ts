import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PostgreSQL data source object identifier. */
export type PostgresqlObjectIdentifier = {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlObjectIdentifierSchema: Schema<PostgresqlObjectIdentifier> =
  s.object<PostgresqlObjectIdentifier>(
    {
      schema: s.optional(s.string()),
      table: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
