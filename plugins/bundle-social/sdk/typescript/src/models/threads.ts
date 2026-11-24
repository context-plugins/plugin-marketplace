import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gifSchema, type Gif } from "./gif.js";
import { mediaItem1Schema, type MediaItem1 } from "./media-item1.js";
import { poll1Schema, type Poll1 } from "./poll1.js";
import { replyControlSchema, type ReplyControl } from "./reply-control.js";

export type Threads = {
  text?: string | null;
  uploadIds?: string[] | null;
  mediaItems?: MediaItem1[] | null;
  topicTag?: string | null;
  replyControl?: ReplyControl | null;
  linkAttachment?: string | null;
  poll?: Poll1 | null;
  gif?: Gif | null;
  allowlistedCountryCodes?: string[] | null;
  crosspostToInstagramStory?: boolean | null;
  crosspostToInstagramStoryDarkMode?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threadsSchema: Schema<Threads> = s.object<Threads>(
  {
    text: s.optionalNullable(s.string()),
    uploadIds: s.optionalNullable(s.array(s.string())),
    mediaItems: s.optionalNullable(s.array(s.lazy(() => mediaItem1Schema))),
    topicTag: s.optionalNullable(s.string()),
    replyControl: s.optionalNullable(s.lazy(() => replyControlSchema)),
    linkAttachment: s.optionalNullable(s.string()),
    poll: s.optionalNullable(s.lazy(() => poll1Schema)),
    gif: s.optionalNullable(s.lazy(() => gifSchema)),
    allowlistedCountryCodes: s.optionalNullable(s.array(s.string())),
    crosspostToInstagramStory: s.optionalNullable(s.boolean()),
    crosspostToInstagramStoryDarkMode: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
