import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscBlueskyPostResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscBlueskyPostResponseSchema: Schema<ApiV1MiscBlueskyPostResponse> =
  s.object<ApiV1MiscBlueskyPostResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
