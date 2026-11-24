import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonAppearance = {
  episodeId: number;
  episodeTitle: string;
  podcastTitle: string;
  publishDate?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personAppearanceSchema: Schema<PersonAppearance> = s.object<PersonAppearance>(
  {
    episodeId: s.int(),
    episodeTitle: s.string(),
    podcastTitle: s.string(),
    publishDate: s.optionalNullable(s.string()),
    _keysMap: {
      episodeId: "episode_id",
      episodeTitle: "episode_title",
      podcastTitle: "podcast_title",
      publishDate: "publish_date",
    },
  },
  { additionalProperties: s.json() },
);
