import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { column3Schema, type Column3 } from "./column3.js";

export type CreateColumns = {
  columns: Column3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createColumnsSchema: Schema<CreateColumns> = s.object<CreateColumns>(
  {
    columns: s.array(s.lazy(() => column3Schema)),
  },
  { additionalProperties: s.json() },
);
