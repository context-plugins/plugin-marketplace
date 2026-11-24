import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Instagram2 = {
  id?: string | null;
  permalink?: string | null;
  thumbnail?: string | null;
  /** Media container id; lets a retry detect a container Meta already published. */
  creationId?: string | null;
  /** Tagged users or collaborators Instagram rejected; the post was published without them. */
  skippedTags?: string[] | null;
  /** Location page id Instagram rejected; the post was published without a location. */
  skippedLocationId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instagram2Schema: Schema<Instagram2> = s.object<Instagram2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
    creationId: s.optionalNullable(s.string()),
    skippedTags: s.optionalNullable(s.array(s.string())),
    skippedLocationId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
