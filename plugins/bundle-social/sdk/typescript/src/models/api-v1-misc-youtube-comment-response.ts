import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscYoutubeCommentResponse = {
  success: boolean;
  permalink?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubeCommentResponseSchema: Schema<ApiV1MiscYoutubeCommentResponse> =
  s.object<ApiV1MiscYoutubeCommentResponse>(
    {
      success: s.boolean(),
      permalink: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
