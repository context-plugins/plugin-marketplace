import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { column4Schema, type Column4 } from "./column4.js";

export type UpdateColumns = {
  columns: Column4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateColumnsSchema: Schema<UpdateColumns> = s.object<UpdateColumns>(
  {
    columns: s.array(s.lazy(() => column4Schema)),
  },
  { additionalProperties: s.json() },
);
