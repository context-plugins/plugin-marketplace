import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscYoutubeThumbnailRequest = {
  teamId: string;
  url: string;
  postId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubeThumbnailRequestSchema: Schema<ApiV1MiscYoutubeThumbnailRequest> =
  s.object<ApiV1MiscYoutubeThumbnailRequest>(
    {
      teamId: s.string(),
      url: s.string(),
      postId: s.string(),
    },
    { additionalProperties: s.json() },
  );
