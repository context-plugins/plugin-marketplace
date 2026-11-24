import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pinterest2 = {
  id?: string | null;
  permalink?: string | null;
  thumbnail?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pinterest2Schema: Schema<Pinterest2> = s.object<Pinterest2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
