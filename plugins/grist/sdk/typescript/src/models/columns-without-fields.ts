import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { column5Schema, type Column5 } from "./column5.js";

export type ColumnsWithoutFields = {
  columns: Column5[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnsWithoutFieldsSchema: Schema<ColumnsWithoutFields> = s.object<ColumnsWithoutFields>(
  {
    columns: s.array(s.lazy(() => column5Schema)),
  },
  { additionalProperties: s.json() },
);
