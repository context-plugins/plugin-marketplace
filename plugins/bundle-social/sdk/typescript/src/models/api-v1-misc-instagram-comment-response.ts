import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscInstagramCommentResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscInstagramCommentResponseSchema: Schema<ApiV1MiscInstagramCommentResponse> =
  s.object<ApiV1MiscInstagramCommentResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
