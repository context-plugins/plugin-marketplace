import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookPostRequest = {
  teamId: string;
  /** The ID of the post/reel to edit */
  postId: string;
  /** The updated message/text content of the post */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookPostRequestSchema: Schema<ApiV1MiscFacebookPostRequest> =
  s.object<ApiV1MiscFacebookPostRequest>(
    {
      teamId: s.string(),
      postId: s.string(),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
