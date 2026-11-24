import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Mysql data source object identifier. */
export type MysqlObjectIdentifier = {
  /** Required. The database name. */
  database?: string;
  /** Required. The table name. */
  table?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlObjectIdentifierSchema: Schema<MysqlObjectIdentifier> = s.object<MysqlObjectIdentifier>(
  {
    database: s.optional(s.string()),
    table: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
