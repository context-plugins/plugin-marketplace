import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscBlueskyCommentRequest = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscBlueskyCommentRequestSchema: Schema<ApiV1MiscBlueskyCommentRequest> =
  s.object<ApiV1MiscBlueskyCommentRequest>(
    {
      teamId: s.string(),
      commentId: s.string(),
    },
    { additionalProperties: s.json() },
  );
