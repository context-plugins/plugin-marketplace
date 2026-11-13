import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { column1Schema, type Column1 } from "./column1.js";

export type Table2 = {
  id?: string;
  columns: Column1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const table2Schema: Schema<Table2> = s.object<Table2>(
  {
    id: s.optional(s.string()),
    columns: s.array(s.lazy(() => column1Schema)),
  },
  { additionalProperties: s.json() },
);
