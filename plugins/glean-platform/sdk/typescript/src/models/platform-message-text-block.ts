import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatCitationAnnotationSchema,
  type PlatformChatCitationAnnotation,
} from "./platform-chat-citation-annotation.js";

export type PlatformMessageTextBlock = {
  /** Text content. */
  text: string;
  /** @default "text" */
  type?: "text";
  annotations?: PlatformChatCitationAnnotation[];
};

export const platformMessageTextBlockSchema: Schema<PlatformMessageTextBlock> =
  s.object<PlatformMessageTextBlock>({
    text: s.string(),
    type: s.defaulted(s.literal("text"), "text"),
    annotations: s.optional(s.array(s.lazy(() => platformChatCitationAnnotationSchema))),
  });
