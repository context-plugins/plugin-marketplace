import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinPostRequest = {
  teamId: string;
  /** The URN of the post to edit */
  postId: string;
  /** The updated text content */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinPostRequestSchema: Schema<ApiV1MiscLinkedinPostRequest> =
  s.object<ApiV1MiscLinkedinPostRequest>(
    {
      teamId: s.string(),
      postId: s.string(),
      description: s.string(),
    },
    { additionalProperties: s.json() },
  );
