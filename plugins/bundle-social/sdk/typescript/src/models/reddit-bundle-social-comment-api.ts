import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RedditBundleSocialCommentApi = {
  text?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redditBundleSocialCommentApiSchema: Schema<RedditBundleSocialCommentApi> =
  s.object<RedditBundleSocialCommentApi>(
    {
      text: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
