import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided
 * are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in
 * JPEG format).
 */
export type Photo = {
  image21X21?: string;
  image27X27?: string;
  image36X36?: string;
  image60X60?: string;
  image128X128?: string;
  image1024X1024?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const photoProperties: s.Shape<Photo> = {
  image21X21: s.optional(s.string()),
  image27X27: s.optional(s.string()),
  image36X36: s.optional(s.string()),
  image60X60: s.optional(s.string()),
  image128X128: s.optional(s.string()),
  image1024X1024: s.optional(s.string()),
  _keysMap: {
    image21X21: "image_21x21",
    image27X27: "image_27x27",
    image36X36: "image_36x36",
    image60X60: "image_60x60",
    image128X128: "image_128x128",
    image1024X1024: "image_1024x1024",
  },
};

export const photoInternalSchema: Schema<Photo> = s.object<Photo>(photoProperties, {
  additionalProperties: s.json(),
});

export const photoSchema: Schema<Photo> = s.lazySchema(() =>
  s.object<Photo>(
    {
      ...photoProperties,
      image21X21: s.optional(s.string().check(s.url())),
      image27X27: s.optional(s.string().check(s.url())),
      image36X36: s.optional(s.string().check(s.url())),
      image60X60: s.optional(s.string().check(s.url())),
      image128X128: s.optional(s.string().check(s.url())),
      image1024X1024: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
