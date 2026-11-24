import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscTwitterCommentResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscTwitterCommentResponseSchema: Schema<ApiV1MiscTwitterCommentResponse> =
  s.object<ApiV1MiscTwitterCommentResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
