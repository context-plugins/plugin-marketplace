import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentInternalSchema, attachmentSchema, type Attachment } from "./attachment.js";
import { carouselInternalSchema, carouselSchema, type Carousel } from "./carousel.js";
import { quickReplyInternalSchema, quickReplySchema, type QuickReply } from "./quick-reply.js";
import { button3InternalSchema, button3Schema, type Button3 } from "./unions/button3.js";

export type Message = {
  text?: string;
  attachments?: Attachment[];
  quickReplies?: QuickReply[];
  buttons?: Button3[];
  carousel?: Carousel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const messageProperties: s.Shape<Message> = {
  text: s.optional(s.string()),
  attachments: s.optional(s.array(s.lazy(() => attachmentInternalSchema))),
  quickReplies: s.optional(s.array(s.lazy(() => quickReplyInternalSchema))),
  buttons: s.optional(s.array(s.lazy(() => button3InternalSchema))),
  carousel: s.optional(s.lazy(() => carouselInternalSchema)),
};

export const messageInternalSchema: Schema<Message> = s.object<Message>(messageProperties, {
  additionalProperties: s.json(),
});

export const messageSchema: Schema<Message> = s.lazySchema(() =>
  s.object<Message>(
    {
      ...messageProperties,
      text: s.optional(s.string().check(s.maxLength(1000))),
      attachments: s.optional(s.array(s.lazy(() => attachmentSchema)).check(s.maxLength(10))),
      quickReplies: s.optional(s.array(s.lazy(() => quickReplySchema)).check(s.maxLength(13))),
      buttons: s.optional(s.array(s.lazy(() => button3Schema)).check(s.maxLength(3))),
      carousel: s.optional(s.lazy(() => carouselSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
