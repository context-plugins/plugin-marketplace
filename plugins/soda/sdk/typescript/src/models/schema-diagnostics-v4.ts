import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  schemaDiagnosticsV4ColumnSchema,
  type SchemaDiagnosticsV4Column,
} from "./schema-diagnostics-v4-column.js";

export type SchemaDiagnosticsV4 = {
  actual?: SchemaDiagnosticsV4Column[];
  expected?: SchemaDiagnosticsV4Column[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaDiagnosticsV4Schema: Schema<SchemaDiagnosticsV4> = s.object<SchemaDiagnosticsV4>(
  {
    actual: s.optional(s.array(s.lazy(() => schemaDiagnosticsV4ColumnSchema))),
    expected: s.optional(s.array(s.lazy(() => schemaDiagnosticsV4ColumnSchema))),
  },
  { additionalProperties: s.json() },
);
