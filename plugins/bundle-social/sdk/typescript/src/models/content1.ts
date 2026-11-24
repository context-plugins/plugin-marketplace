import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  attachmentBundleSocialConversationApiSchema,
  type AttachmentBundleSocialConversationApi,
} from "./attachment-bundle-social-conversation-api.js";
import { carouselInternalSchema, carouselSchema, type Carousel } from "./carousel.js";

export type Content1 = {
  text: string;
  attachments?: AttachmentBundleSocialConversationApi[];
  carousel?: Carousel;
};

const content1Properties: s.Shape<Content1> = {
  text: s.string(),
  attachments: s.optional(s.array(s.lazy(() => attachmentBundleSocialConversationApiSchema))),
  carousel: s.optional(s.lazy(() => carouselInternalSchema)),
};

export const content1InternalSchema: Schema<Content1> = s.object<Content1>(content1Properties);

export const content1Schema: Schema<Content1> = s.lazySchema(() =>
  s.object<Content1>({
    ...content1Properties,
    text: s.string().check(s.minLength(1), s.maxLength(1000)),
    attachments: s.optional(
      s.array(s.lazy(() => attachmentBundleSocialConversationApiSchema)).check(s.maxLength(10)),
    ),
    carousel: s.optional(s.lazy(() => carouselSchema)),
  }),
);
