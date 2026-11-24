import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SchemaDiagnosticsV4Column = {
  name?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaDiagnosticsV4ColumnSchema: Schema<SchemaDiagnosticsV4Column> =
  s.object<SchemaDiagnosticsV4Column>(
    {
      name: s.optional(s.string()),
      type: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
