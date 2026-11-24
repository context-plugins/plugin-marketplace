import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscBlueskyCommentResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscBlueskyCommentResponseSchema: Schema<ApiV1MiscBlueskyCommentResponse> =
  s.object<ApiV1MiscBlueskyCommentResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
