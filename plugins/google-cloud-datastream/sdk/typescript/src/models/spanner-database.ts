import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerSchemaSchema, type SpannerSchema } from "./spanner-schema.js";

/** Spanner database structure. */
export type SpannerDatabase = {
  /** Optional. Spanner schemas in the database. */
  schemas?: SpannerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerDatabaseSchema: Schema<SpannerDatabase> = s.object<SpannerDatabase>(
  {
    schemas: s.optional(s.array(s.lazy(() => spannerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
