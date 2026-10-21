import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesImageSourceSchema, type MessagesImageSource } from "./unions/messages-image-source.js";

export type MessagesImageBlock = {
  /** Content block type. Must be `image`. @default "image" */
  type?: "image";
  /** Image source descriptor (`url` or `base64`). */
  source: MessagesImageSource;
};

export const messagesImageBlockSchema: Schema<MessagesImageBlock> = s.object<MessagesImageBlock>({
  type: s.defaulted(s.literal("image"), "image"),
  source: messagesImageSourceSchema,
});
