import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesUrlImageSource = {
  /** Image source type. Must be `url`. @default "url" */
  type?: "url";
  /** Publicly accessible image URL that the service can fetch. */
  url: string;
};

export const messagesUrlImageSourceSchema: Schema<MessagesUrlImageSource> = s.object<MessagesUrlImageSource>({
  type: s.defaulted(s.literal("url"), "url"),
  url: s.string(),
});
