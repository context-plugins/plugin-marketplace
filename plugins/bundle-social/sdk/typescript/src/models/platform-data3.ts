import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { carouselInternalSchema, carouselSchema, type Carousel } from "./carousel.js";
import {
  quickReplyBundleSocialConversationApiInternalSchema,
  quickReplyBundleSocialConversationApiSchema,
  type QuickReplyBundleSocialConversationApi,
} from "./quick-reply-bundle-social-conversation-api.js";
import { reactionSchema, type Reaction } from "./reaction.js";
import { replyTo1Schema, type ReplyTo1 } from "./reply-to1.js";
import { storyReplySchema, type StoryReply } from "./story-reply.js";
import {
  button3BundleSocialConversationApiInternalSchema,
  button3BundleSocialConversationApiSchema,
  type Button3BundleSocialConversationApi,
} from "./unions/button3-bundle-social-conversation-api.js";

export type PlatformData3 = {
  replyTo?: ReplyTo1 | null;
  storyReply?: StoryReply | null;
  reactions?: Reaction[];
  quickReplies?: QuickReplyBundleSocialConversationApi[];
  buttons?: Button3BundleSocialConversationApi[];
  carousel?: Carousel | null;
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

const platformData3Properties: s.Shape<PlatformData3> = {
  replyTo: s.optionalNullable(s.lazy(() => replyTo1Schema)),
  storyReply: s.optionalNullable(s.lazy(() => storyReplySchema)),
  reactions: s.optional(s.array(s.lazy(() => reactionSchema))),
  quickReplies: s.optional(s.array(s.lazy(() => quickReplyBundleSocialConversationApiInternalSchema))),
  buttons: s.optional(s.array(s.lazy(() => button3BundleSocialConversationApiInternalSchema))),
  carousel: s.optionalNullable(s.lazy(() => carouselInternalSchema)),
  isEcho: s.optionalNullable(s.boolean()),
  isEdited: s.optionalNullable(s.boolean()),
  editedAt: s.optionalNullable(s.dateTime()),
  isPostback: s.optionalNullable(s.boolean()),
  postbackPayload: s.optionalNullable(s.string()),
  isUnsent: s.optionalNullable(s.boolean()),
  unsentAt: s.optionalNullable(s.dateTime()),
};

export const platformData3InternalSchema: Schema<PlatformData3> = s.object<PlatformData3>(
  platformData3Properties,
  { additionalProperties: s.json() },
);

export const platformData3Schema: Schema<PlatformData3> = s.lazySchema(() =>
  s.object<PlatformData3>(
    {
      ...platformData3Properties,
      quickReplies: s.optional(s.array(s.lazy(() => quickReplyBundleSocialConversationApiSchema))),
      buttons: s.optional(s.array(s.lazy(() => button3BundleSocialConversationApiSchema))),
      carousel: s.optionalNullable(s.lazy(() => carouselSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
