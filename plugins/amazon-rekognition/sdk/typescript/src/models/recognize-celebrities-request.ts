import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";

export type RecognizeCelebritiesRequest = {
  image: Image;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeCelebritiesRequestSchema: Schema<RecognizeCelebritiesRequest> =
  s.object<RecognizeCelebritiesRequest>(
    {
      image: imageSchema,
      _keysMap: {
        image: "Image",
      },
    },
    { additionalProperties: s.json() },
  );
