import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { table1Schema, type Table1 } from "./table1.js";

export type TablesWithoutFields = {
  tables: Table1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tablesWithoutFieldsSchema: Schema<TablesWithoutFields> = s.object<TablesWithoutFields>(
  {
    tables: s.array(s.lazy(() => table1Schema)),
  },
  { additionalProperties: s.json() },
);
