import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleSchemaSchema, type OracleSchema } from "./oracle-schema.js";

/** Oracle database structure. */
export type OracleRdbms = {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: OracleSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleRdbmsSchema: Schema<OracleRdbms> = s.object<OracleRdbms>(
  {
    oracleSchemas: s.optional(s.array(s.lazy(() => oracleSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
