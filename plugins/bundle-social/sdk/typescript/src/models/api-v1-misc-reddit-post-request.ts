import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscRedditPostRequest = {
  teamId: string;
  /** The ID of the post to edit (without prefix) */
  postId: string;
  /** The updated text content (selftext for text posts, works for all editable post types) */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscRedditPostRequestSchema: Schema<ApiV1MiscRedditPostRequest> =
  s.object<ApiV1MiscRedditPostRequest>(
    {
      teamId: s.string(),
      postId: s.string(),
      description: s.string(),
    },
    { additionalProperties: s.json() },
  );
