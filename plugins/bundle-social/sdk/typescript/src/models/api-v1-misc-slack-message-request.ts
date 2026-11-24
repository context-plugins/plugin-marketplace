import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscSlackMessageRequest = {
  teamId: string;
  /** The ID of the post in our database */
  postId: string;
  /** The updated message text */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscSlackMessageRequestSchema: Schema<ApiV1MiscSlackMessageRequest> =
  s.object<ApiV1MiscSlackMessageRequest>(
    {
      teamId: s.string(),
      postId: s.string(),
      description: s.string(),
    },
    { additionalProperties: s.json() },
  );
