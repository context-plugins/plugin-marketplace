import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleColumnSchema, type OracleColumn } from "./oracle-column.js";

/** Oracle table. */
export type OracleTable = {
  /**
   * Oracle columns in the schema. When unspecified as part of include/exclude objects,
   * includes/excludes everything.
   */
  oracleColumns?: OracleColumn[];
  /** The table name. */
  table?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleTableSchema: Schema<OracleTable> = s.object<OracleTable>(
  {
    oracleColumns: s.optional(s.array(s.lazy(() => oracleColumnSchema))),
    table: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
