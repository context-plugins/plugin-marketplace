import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesBase64ImageSourceSchema,
  type MessagesBase64ImageSource,
} from "../messages-base64-image-source.js";
import { messagesUrlImageSourceSchema, type MessagesUrlImageSource } from "../messages-url-image-source.js";

/** Image source descriptor (`url` or `base64`). */
export type MessagesImageSource =
  | (MessagesBase64ImageSource & { type: "base64" })
  | (MessagesUrlImageSource & { type: "url" });

export const messagesImageSourceSchema: Schema<MessagesImageSource> =
  s.discriminatedUnion<MessagesImageSource>("type", {
    base64: messagesBase64ImageSourceSchema,
    url: messagesUrlImageSourceSchema,
  });
