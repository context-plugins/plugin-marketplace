import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscMastodonStatusResponse = {
  success: boolean;
  permalink: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscMastodonStatusResponseSchema: Schema<ApiV1MiscMastodonStatusResponse> =
  s.object<ApiV1MiscMastodonStatusResponse>(
    {
      success: s.boolean(),
      permalink: s.string(),
    },
    { additionalProperties: s.json() },
  );
