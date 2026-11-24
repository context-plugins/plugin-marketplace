import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerSchemaSchema, type SpannerSchema } from "./spanner-schema.js";

/** Spanner data source objects to avoid backfilling. */
export type SpannerDatabase6 = {
  /** Optional. Spanner schemas in the database. */
  schemas?: SpannerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerDatabase6Schema: Schema<SpannerDatabase6> = s.object<SpannerDatabase6>(
  {
    schemas: s.optional(s.array(s.lazy(() => spannerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
