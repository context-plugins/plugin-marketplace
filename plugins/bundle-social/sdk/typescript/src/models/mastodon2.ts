import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Mastodon2 = {
  id?: string | null;
  permalink?: string | null;
  thumbnail?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mastodon2Schema: Schema<Mastodon2> = s.object<Mastodon2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
