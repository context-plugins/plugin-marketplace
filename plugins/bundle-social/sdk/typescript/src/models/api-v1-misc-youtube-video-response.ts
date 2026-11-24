import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscYoutubeVideoResponse = {
  success: boolean;
  permalink: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubeVideoResponseSchema: Schema<ApiV1MiscYoutubeVideoResponse> =
  s.object<ApiV1MiscYoutubeVideoResponse>(
    {
      success: s.boolean(),
      permalink: s.string(),
    },
    { additionalProperties: s.json() },
  );
