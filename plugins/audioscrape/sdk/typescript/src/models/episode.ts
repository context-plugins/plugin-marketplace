import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Episode = {
  id: string;
  publishDate: string;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const episodeSchema: Schema<Episode> = s.object<Episode>(
  {
    id: s.string(),
    publishDate: s.string(),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      publishDate: "publish_date",
    },
  },
  { additionalProperties: s.json() },
);
