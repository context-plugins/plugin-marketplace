import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Oracle data source object identifier. */
export type OracleObjectIdentifier = {
  /** Required. The table name. */
  table?: string;
  /** Required. The schema name. */
  schema?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleObjectIdentifierSchema: Schema<OracleObjectIdentifier> = s.object<OracleObjectIdentifier>(
  {
    table: s.optional(s.string()),
    schema: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
