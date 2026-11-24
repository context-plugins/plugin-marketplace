import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscMastodonStatusRequest = {
  teamId: string;
  /** The ID of the post in our database */
  postId: string;
  /** The updated status text */
  description: string;
  /** The updated spoiler/content warning text */
  spoilerText?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscMastodonStatusRequestSchema: Schema<ApiV1MiscMastodonStatusRequest> =
  s.object<ApiV1MiscMastodonStatusRequest>(
    {
      teamId: s.string(),
      postId: s.string(),
      description: s.string(),
      spoilerText: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
