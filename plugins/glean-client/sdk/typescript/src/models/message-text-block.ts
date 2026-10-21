import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatCitationAnnotationSchema, type ChatCitationAnnotation } from "./chat-citation-annotation.js";

export type MessageTextBlock = {
  text: string;
  /** @default "text" */
  type?: "text";
  annotations?: ChatCitationAnnotation[];
};

export const messageTextBlockSchema: Schema<MessageTextBlock> = s.object<MessageTextBlock>({
  text: s.string(),
  type: s.defaulted(s.literal("text"), "text"),
  annotations: s.optional(s.array(s.lazy(() => chatCitationAnnotationSchema))),
});
