import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesBase64ImageSourceSchema,
  type MessagesBase64ImageSource,
} from "../messages-base64-image-source.js";
import { messagesUrlImageSourceSchema, type MessagesUrlImageSource } from "../messages-url-image-source.js";

export type MessagesImageSource1 =
  | (MessagesBase64ImageSource & { type: "base64" })
  | (MessagesUrlImageSource & { type: "url" });

export const messagesImageSource1Schema: Schema<MessagesImageSource1> =
  s.discriminatedUnion<MessagesImageSource1>("type", {
    base64: messagesBase64ImageSourceSchema,
    url: messagesUrlImageSourceSchema,
  });
