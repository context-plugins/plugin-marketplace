import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { table3Schema, type Table3 } from "./table3.js";

export type UpdateTables = {
  tables: Table3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTablesSchema: Schema<UpdateTables> = s.object<UpdateTables>(
  {
    tables: s.array(s.lazy(() => table3Schema)),
  },
  { additionalProperties: s.json() },
);
