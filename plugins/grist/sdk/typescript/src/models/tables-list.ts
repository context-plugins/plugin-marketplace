import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableSchema, type Table } from "./table.js";

export type TablesList = {
  tables: Table[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tablesListSchema: Schema<TablesList> = s.object<TablesList>(
  {
    tables: s.array(s.lazy(() => tableSchema)),
  },
  { additionalProperties: s.json() },
);
