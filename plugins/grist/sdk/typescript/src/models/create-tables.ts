import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { table2Schema, type Table2 } from "./table2.js";

export type CreateTables = {
  tables: Table2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTablesSchema: Schema<CreateTables> = s.object<CreateTables>(
  {
    tables: s.array(s.lazy(() => table2Schema)),
  },
  { additionalProperties: s.json() },
);
