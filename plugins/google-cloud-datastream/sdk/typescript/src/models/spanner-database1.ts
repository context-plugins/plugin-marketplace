import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerSchemaSchema, type SpannerSchema } from "./spanner-schema.js";

/** Enriched Spanner database. */
export type SpannerDatabase1 = {
  /** Optional. Spanner schemas in the database. */
  schemas?: SpannerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerDatabase1Schema: Schema<SpannerDatabase1> = s.object<SpannerDatabase1>(
  {
    schemas: s.optional(s.array(s.lazy(() => spannerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
