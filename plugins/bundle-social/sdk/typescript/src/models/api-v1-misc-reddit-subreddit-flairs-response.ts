import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscRedditSubredditFlairsResponse = {
  id?: string;
  text?: string;
  cssClass?: string;
  textColor?: string;
  backgroundColor?: string;
  modOnly?: boolean;
  allowableContent?: string;
  maxEmojis?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscRedditSubredditFlairsResponseSchema: Schema<ApiV1MiscRedditSubredditFlairsResponse> =
  s.object<ApiV1MiscRedditSubredditFlairsResponse>(
    {
      id: s.optional(s.string()),
      text: s.optional(s.string()),
      cssClass: s.optional(s.string()),
      textColor: s.optional(s.string()),
      backgroundColor: s.optional(s.string()),
      modOnly: s.optional(s.boolean()),
      allowableContent: s.optional(s.string()),
      maxEmojis: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
