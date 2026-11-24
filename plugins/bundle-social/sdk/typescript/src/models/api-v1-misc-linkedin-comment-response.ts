import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinCommentResponse = {
  success: boolean;
  permalink?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinCommentResponseSchema: Schema<ApiV1MiscLinkedinCommentResponse> =
  s.object<ApiV1MiscLinkedinCommentResponse>(
    {
      success: s.boolean(),
      permalink: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
