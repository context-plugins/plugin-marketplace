import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscYoutubeCommentRequest1 = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubeCommentRequest1Schema: Schema<ApiV1MiscYoutubeCommentRequest1> =
  s.object<ApiV1MiscYoutubeCommentRequest1>(
    {
      teamId: s.string(),
      commentId: s.string(),
    },
    { additionalProperties: s.json() },
  );
