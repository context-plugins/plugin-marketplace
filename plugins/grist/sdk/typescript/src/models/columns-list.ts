import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { column2Schema, type Column2 } from "./column2.js";

export type ColumnsList = {
  columns?: Column2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnsListSchema: Schema<ColumnsList> = s.object<ColumnsList>(
  {
    columns: s.optional(s.array(s.lazy(() => column2Schema))),
  },
  { additionalProperties: s.json() },
);
