import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscDiscordMessageResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscDiscordMessageResponseSchema: Schema<ApiV1MiscDiscordMessageResponse> =
  s.object<ApiV1MiscDiscordMessageResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
