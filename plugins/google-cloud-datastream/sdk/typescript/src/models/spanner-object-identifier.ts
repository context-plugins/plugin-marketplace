import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Spanner data source object identifier. */
export type SpannerObjectIdentifier = {
  /** Optional. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerObjectIdentifierSchema: Schema<SpannerObjectIdentifier> =
  s.object<SpannerObjectIdentifier>(
    {
      schema: s.optional(s.string()),
      table: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
