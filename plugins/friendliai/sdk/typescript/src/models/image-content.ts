import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageData2Schema, type ImageData2 } from "./image-data2.js";

export type ImageContent = {
  /** The type of the message content. @default "image_url" */
  type?: "image_url";
  /** The image URL data. */
  imageUrl: ImageData2;
};

export const imageContentSchema: Schema<ImageContent> = s.object<ImageContent>({
  type: s.defaulted(s.literal("image_url"), "image_url"),
  imageUrl: imageData2Schema,
  _keysMap: {
    imageUrl: "image_url",
  },
});
