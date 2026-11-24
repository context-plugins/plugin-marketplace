import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Instagram2BundleSocialCommentApi = {
  id?: string | null;
  permalink?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instagram2BundleSocialCommentApiSchema: Schema<Instagram2BundleSocialCommentApi> =
  s.object<Instagram2BundleSocialCommentApi>(
    {
      id: s.optionalNullable(s.string()),
      permalink: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
