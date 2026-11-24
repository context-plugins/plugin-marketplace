import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleSchemaSchema, type OracleSchema } from "./oracle-schema.js";

/** The Oracle objects to include in the stream. */
export type OracleRdbms3 = {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: OracleSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleRdbms3Schema: Schema<OracleRdbms3> = s.object<OracleRdbms3>(
  {
    oracleSchemas: s.optional(s.array(s.lazy(() => oracleSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
