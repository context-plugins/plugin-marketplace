import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerTableSchema, type SpannerTable } from "./spanner-table.js";

/** Spanner schema. */
export type SpannerSchema = {
  /** Optional. Spanner tables in the schema. */
  tables?: SpannerTable[];
  /** Required. The schema name. */
  schema?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerSchemaSchema: Schema<SpannerSchema> = s.object<SpannerSchema>(
  {
    tables: s.optional(s.array(s.lazy(() => spannerTableSchema))),
    schema: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
