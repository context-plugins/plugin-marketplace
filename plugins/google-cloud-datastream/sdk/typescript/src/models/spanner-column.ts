import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Spanner column. */
export type SpannerColumn = {
  /** Required. The column name. */
  column?: string;
  /** Optional. Whether or not the column is a primary key. */
  isPrimaryKey?: boolean;
  /** Optional. The ordinal position of the column in the table. */
  ordinalPosition?: string;
  /** Optional. Spanner data type. */
  dataType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerColumnSchema: Schema<SpannerColumn> = s.object<SpannerColumn>(
  {
    column: s.optional(s.string()),
    isPrimaryKey: s.optional(s.boolean()),
    ordinalPosition: s.optional(s.string()),
    dataType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
