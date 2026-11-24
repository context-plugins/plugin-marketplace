import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PodcastRef = {
  id: number;
  imageUrl?: string | null;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastRefSchema: Schema<PodcastRef> = s.object<PodcastRef>(
  {
    id: s.int(),
    imageUrl: s.optionalNullable(s.string()),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      imageUrl: "image_url",
    },
  },
  { additionalProperties: s.json() },
);
