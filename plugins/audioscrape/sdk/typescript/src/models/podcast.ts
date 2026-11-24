import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Podcast = {
  id: string;
  imageUrl: string;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastSchema: Schema<Podcast> = s.object<Podcast>(
  {
    id: s.string(),
    imageUrl: s.string(),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      imageUrl: "image_url",
    },
  },
  { additionalProperties: s.json() },
);
