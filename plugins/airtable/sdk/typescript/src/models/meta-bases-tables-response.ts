import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableSchemaSchema, type TableSchema } from "./table-schema.js";

export type MetaBasesTablesResponse = {
  tables?: TableSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaBasesTablesResponseSchema: Schema<MetaBasesTablesResponse> =
  s.object<MetaBasesTablesResponse>(
    {
      tables: s.optional(s.array(s.lazy(() => tableSchemaSchema))),
    },
    { additionalProperties: s.json() },
  );
