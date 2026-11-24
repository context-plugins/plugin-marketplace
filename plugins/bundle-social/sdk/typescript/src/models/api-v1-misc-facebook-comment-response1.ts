import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookCommentResponse1 = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookCommentResponse1Schema: Schema<ApiV1MiscFacebookCommentResponse1> =
  s.object<ApiV1MiscFacebookCommentResponse1>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
