import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnSchema, type Column } from "./column.js";
import { fields4Schema, type Fields4 } from "./fields4.js";

export type Table = {
  id: string;
  fields: Fields4;
  /** Included when expand=column is set. Contains metadata for each column in the table. */
  columns?: Column[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableSchema: Schema<Table> = s.object<Table>(
  {
    id: s.string(),
    fields: fields4Schema,
    columns: s.optional(s.array(s.lazy(() => columnSchema))),
  },
  { additionalProperties: s.json() },
);
