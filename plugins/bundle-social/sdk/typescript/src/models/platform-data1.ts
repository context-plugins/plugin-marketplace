import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { carousel52InternalSchema, carousel52Schema, type Carousel52 } from "./carousel52.js";
import { quickReply52InternalSchema, quickReply52Schema, type QuickReply52 } from "./quick-reply52.js";
import { reactionSchema, type Reaction } from "./reaction.js";
import { replyTo1Schema, type ReplyTo1 } from "./reply-to1.js";
import { storyReplySchema, type StoryReply } from "./story-reply.js";
import { button1263InternalSchema, button1263Schema, type Button1263 } from "./unions/button1263.js";

export type PlatformData1 = {
  replyTo?: ReplyTo1 | null;
  storyReply?: StoryReply | null;
  reactions?: Reaction[];
  quickReplies?: QuickReply52[];
  buttons?: Button1263[];
  carousel?: Carousel52 | null;
  isEcho?: boolean | null;
  isEdited?: boolean | null;
  editedAt?: Date | null;
  isPostback?: boolean | null;
  postbackPayload?: string | null;
  isUnsent?: boolean | null;
  unsentAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const platformData1Properties: s.Shape<PlatformData1> = {
  replyTo: s.optionalNullable(s.lazy(() => replyTo1Schema)),
  storyReply: s.optionalNullable(s.lazy(() => storyReplySchema)),
  reactions: s.optional(s.array(s.lazy(() => reactionSchema))),
  quickReplies: s.optional(s.array(s.lazy(() => quickReply52InternalSchema))),
  buttons: s.optional(s.array(s.lazy(() => button1263InternalSchema))),
  carousel: s.optionalNullable(s.lazy(() => carousel52InternalSchema)),
  isEcho: s.optionalNullable(s.boolean()),
  isEdited: s.optionalNullable(s.boolean()),
  editedAt: s.optionalNullable(s.dateTime()),
  isPostback: s.optionalNullable(s.boolean()),
  postbackPayload: s.optionalNullable(s.string()),
  isUnsent: s.optionalNullable(s.boolean()),
  unsentAt: s.optionalNullable(s.dateTime()),
};

export const platformData1InternalSchema: Schema<PlatformData1> = s.object<PlatformData1>(
  platformData1Properties,
  { additionalProperties: s.json() },
);

export const platformData1Schema: Schema<PlatformData1> = s.lazySchema(() =>
  s.object<PlatformData1>(
    {
      ...platformData1Properties,
      quickReplies: s.optional(s.array(s.lazy(() => quickReply52Schema))),
      buttons: s.optional(s.array(s.lazy(() => button1263Schema))),
      carousel: s.optionalNullable(s.lazy(() => carousel52Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
