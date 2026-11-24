import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerColumnSchema, type SpannerColumn } from "./spanner-column.js";

/** Spanner table. */
export type SpannerTable = {
  /** Required. The table name. */
  table?: string;
  /** Optional. Spanner columns in the table. */
  columns?: SpannerColumn[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerTableSchema: Schema<SpannerTable> = s.object<SpannerTable>(
  {
    table: s.optional(s.string()),
    columns: s.optional(s.array(s.lazy(() => spannerColumnSchema))),
  },
  { additionalProperties: s.json() },
);
