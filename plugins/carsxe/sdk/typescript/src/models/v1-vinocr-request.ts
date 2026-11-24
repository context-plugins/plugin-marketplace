import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1VinocrRequest = {
  /** URL to an image, or the base64 string of the image. */
  imageUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1VinocrRequestSchema: Schema<V1VinocrRequest> = s.object<V1VinocrRequest>(
  {
    imageUrl: s.string(),
    _keysMap: {
      imageUrl: "image_url",
    },
  },
  { additionalProperties: s.json() },
);
