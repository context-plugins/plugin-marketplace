import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StoryReply = {
  storyId?: string | null;
  url?: string | null;
  linkStickerUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyReplySchema: Schema<StoryReply> = s.object<StoryReply>(
  {
    storyId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    linkStickerUrl: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
