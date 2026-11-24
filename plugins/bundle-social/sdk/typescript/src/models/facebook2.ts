import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Facebook2 = {
  id?: string | null;
  postId?: string | null;
  videoId?: string | null;
  permalink?: string | null;
  thumbnail?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const facebook2Schema: Schema<Facebook2> = s.object<Facebook2>(
  {
    id: s.optionalNullable(s.string()),
    postId: s.optionalNullable(s.string()),
    videoId: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
