import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscTwitterRetweetRequest = {
  teamId: string;
  /** The numeric ID of the X post to repost (the last segment of its URL) */
  tweetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscTwitterRetweetRequestProperties: s.Shape<ApiV1MiscTwitterRetweetRequest> = {
  teamId: s.string(),
  tweetId: s.string(),
};

export const apiV1MiscTwitterRetweetRequestInternalSchema: Schema<ApiV1MiscTwitterRetweetRequest> =
  s.object<ApiV1MiscTwitterRetweetRequest>(apiV1MiscTwitterRetweetRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscTwitterRetweetRequestSchema: Schema<ApiV1MiscTwitterRetweetRequest> = s.lazySchema(() =>
  s.object<ApiV1MiscTwitterRetweetRequest>(
    {
      ...apiV1MiscTwitterRetweetRequestProperties,
      tweetId: s.string().check(s.pattern("^\\d+$")),
    },
    { additionalProperties: s.json() },
  ),
);
