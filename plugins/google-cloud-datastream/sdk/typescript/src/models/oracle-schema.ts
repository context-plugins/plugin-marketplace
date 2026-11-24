import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleTableSchema, type OracleTable } from "./oracle-table.js";

/** Oracle schema. */
export type OracleSchema = {
  /** Tables in the schema. */
  oracleTables?: OracleTable[];
  /** The schema name. */
  schema?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleSchemaSchema: Schema<OracleSchema> = s.object<OracleSchema>(
  {
    oracleTables: s.optional(s.array(s.lazy(() => oracleTableSchema))),
    schema: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
