import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesBase64ImageSource = {
  /** Image source type. Must be `base64`. @default "base64" */
  type?: "base64";
  /** Base64-encoded image bytes (without data URL prefix). */
  data: string;
  /** MIME type, for example `image/png`. */
  mediaType: string;
};

export const messagesBase64ImageSourceSchema: Schema<MessagesBase64ImageSource> =
  s.object<MessagesBase64ImageSource>({
    type: s.defaulted(s.literal("base64"), "base64"),
    data: s.string(),
    mediaType: s.string(),
    _keysMap: {
      mediaType: "media_type",
    },
  });
