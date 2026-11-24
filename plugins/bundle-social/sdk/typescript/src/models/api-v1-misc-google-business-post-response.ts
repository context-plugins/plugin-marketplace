import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessPostResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessPostResponseSchema: Schema<ApiV1MiscGoogleBusinessPostResponse> =
  s.object<ApiV1MiscGoogleBusinessPostResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
