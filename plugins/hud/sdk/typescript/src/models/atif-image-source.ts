import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaTypeSchema, type MediaType } from "./media-type.js";

export type AtifImageSource = {
  mediaType: MediaType;
  path: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const atifImageSourceSchema: Schema<AtifImageSource> = s.object<AtifImageSource>(
  {
    mediaType: mediaTypeSchema,
    path: s.string(),
    _keysMap: {
      mediaType: "media_type",
    },
  },
  { additionalProperties: s.json() },
);
