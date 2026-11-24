import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present for podcast episodes; `null` for uploaded items (which have no parent podcast). */
export type PodcastRef2 = {
  id: number;
  imageUrl?: string | null;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastRef2Schema: Schema<PodcastRef2> = s.object<PodcastRef2>(
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
