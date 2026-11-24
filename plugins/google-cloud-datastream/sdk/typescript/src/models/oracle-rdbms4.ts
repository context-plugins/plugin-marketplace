import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleSchemaSchema, type OracleSchema } from "./oracle-schema.js";

/** Optional. Oracle RDBMS to enrich with child data objects and metadata. */
export type OracleRdbms4 = {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: OracleSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleRdbms4Schema: Schema<OracleRdbms4> = s.object<OracleRdbms4>(
  {
    oracleSchemas: s.optional(s.array(s.lazy(() => oracleSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
