import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscTwitterTweetResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscTwitterTweetResponseSchema: Schema<ApiV1MiscTwitterTweetResponse> =
  s.object<ApiV1MiscTwitterTweetResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
