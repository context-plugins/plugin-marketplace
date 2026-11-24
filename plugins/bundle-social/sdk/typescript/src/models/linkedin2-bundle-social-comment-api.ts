import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Linkedin2BundleSocialCommentApi = {
  id?: string | null;
  commentUrn?: string | null;
  permalink?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedin2BundleSocialCommentApiSchema: Schema<Linkedin2BundleSocialCommentApi> =
  s.object<Linkedin2BundleSocialCommentApi>(
    {
      id: s.optionalNullable(s.string()),
      commentUrn: s.optionalNullable(s.string()),
      permalink: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
