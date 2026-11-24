import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attachmentBundleSocialConversationApiSchema,
  type AttachmentBundleSocialConversationApi,
} from "./attachment-bundle-social-conversation-api.js";
import { carouselInternalSchema, carouselSchema, type Carousel } from "./carousel.js";
import {
  quickReplyBundleSocialConversationApiInternalSchema,
  quickReplyBundleSocialConversationApiSchema,
  type QuickReplyBundleSocialConversationApi,
} from "./quick-reply-bundle-social-conversation-api.js";
import {
  button3BundleSocialConversationApiInternalSchema,
  button3BundleSocialConversationApiSchema,
  type Button3BundleSocialConversationApi,
} from "./unions/button3-bundle-social-conversation-api.js";

export type Content = {
  text?: string;
  attachments?: AttachmentBundleSocialConversationApi[];
  quickReplies?: QuickReplyBundleSocialConversationApi[];
  buttons?: Button3BundleSocialConversationApi[];
  carousel?: Carousel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentProperties: s.Shape<Content> = {
  text: s.optional(s.string()),
  attachments: s.optional(s.array(s.lazy(() => attachmentBundleSocialConversationApiSchema))),
  quickReplies: s.optional(s.array(s.lazy(() => quickReplyBundleSocialConversationApiInternalSchema))),
  buttons: s.optional(s.array(s.lazy(() => button3BundleSocialConversationApiInternalSchema))),
  carousel: s.optional(s.lazy(() => carouselInternalSchema)),
};

export const contentInternalSchema: Schema<Content> = s.object<Content>(contentProperties, {
  additionalProperties: s.json(),
});

export const contentSchema: Schema<Content> = s.lazySchema(() =>
  s.object<Content>(
    {
      ...contentProperties,
      text: s.optional(s.string().check(s.maxLength(1000))),
      attachments: s.optional(
        s.array(s.lazy(() => attachmentBundleSocialConversationApiSchema)).check(s.maxLength(10)),
      ),
      quickReplies: s.optional(
        s.array(s.lazy(() => quickReplyBundleSocialConversationApiSchema)).check(s.maxLength(13)),
      ),
      buttons: s.optional(
        s.array(s.lazy(() => button3BundleSocialConversationApiSchema)).check(s.maxLength(3)),
      ),
      carousel: s.optional(s.lazy(() => carouselSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
