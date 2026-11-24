import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscBlueskyPostRequest = {
  teamId: string;
  /** The ID of the post in bundle.social */
  postId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscBlueskyPostRequestSchema: Schema<ApiV1MiscBlueskyPostRequest> =
  s.object<ApiV1MiscBlueskyPostRequest>(
    {
      teamId: s.string(),
      postId: s.string(),
    },
    { additionalProperties: s.json() },
  );
