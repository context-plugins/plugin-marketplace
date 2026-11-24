import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerSchemaSchema, type SpannerSchema } from "./spanner-schema.js";

/**
 * Optional. The Spanner objects to avoid retrieving. If some objects are both included and
 * excluded, an error will be thrown.
 */
export type SpannerDatabase4 = {
  /** Optional. Spanner schemas in the database. */
  schemas?: SpannerSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerDatabase4Schema: Schema<SpannerDatabase4> = s.object<SpannerDatabase4>(
  {
    schemas: s.optional(s.array(s.lazy(() => spannerSchemaSchema))),
  },
  { additionalProperties: s.json() },
);
