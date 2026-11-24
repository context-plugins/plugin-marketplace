import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SQLServer data source object identifier. */
export type SqlServerObjectIdentifier = {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerObjectIdentifierSchema: Schema<SqlServerObjectIdentifier> =
  s.object<SqlServerObjectIdentifier>(
    {
      schema: s.optional(s.string()),
      table: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
