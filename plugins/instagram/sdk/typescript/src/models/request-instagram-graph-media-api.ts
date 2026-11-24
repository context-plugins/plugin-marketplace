import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestInstagramGraphMediaApi = {
  commentEnabled?: boolean;
  accessToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestInstagramGraphMediaApiSchema: Schema<RequestInstagramGraphMediaApi> =
  s.object<RequestInstagramGraphMediaApi>(
    {
      commentEnabled: s.optional(s.boolean()),
      accessToken: s.optional(s.string()),
      _keysMap: {
        commentEnabled: "comment_enabled",
        accessToken: "access_token",
      },
    },
    { additionalProperties: s.json() },
  );
