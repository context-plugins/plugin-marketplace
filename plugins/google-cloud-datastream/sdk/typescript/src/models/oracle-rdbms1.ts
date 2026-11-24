import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleSchemaSchema, type OracleSchema } from "./oracle-schema.js";

/** Enriched Oracle RDBMS object. */
export type OracleRdbms1 = {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: OracleSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleRdbms1Schema: Schema<OracleRdbms1> = s.object<OracleRdbms1>(
  {
    oracleSchemas: s.optional(s.array(s.lazy(() => oracleSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
