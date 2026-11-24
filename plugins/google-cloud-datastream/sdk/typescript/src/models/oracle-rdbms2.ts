import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleSchemaSchema, type OracleSchema } from "./oracle-schema.js";

/** The Oracle objects to exclude from the stream. */
export type OracleRdbms2 = {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: OracleSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleRdbms2Schema: Schema<OracleRdbms2> = s.object<OracleRdbms2>(
  {
    oracleSchemas: s.optional(s.array(s.lazy(() => oracleSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
