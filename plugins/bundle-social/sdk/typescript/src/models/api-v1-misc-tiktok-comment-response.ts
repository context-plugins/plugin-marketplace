import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscTiktokCommentResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscTiktokCommentResponseSchema: Schema<ApiV1MiscTiktokCommentResponse> =
  s.object<ApiV1MiscTiktokCommentResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
