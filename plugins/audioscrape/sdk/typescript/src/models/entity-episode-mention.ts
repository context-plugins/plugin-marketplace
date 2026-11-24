import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityEpisodeMention = {
  episodeId: number;
  episodeTitle: string;
  mentionCount: number;
  podcastTitle: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityEpisodeMentionSchema: Schema<EntityEpisodeMention> = s.object<EntityEpisodeMention>(
  {
    episodeId: s.int(),
    episodeTitle: s.string(),
    mentionCount: s.int(),
    podcastTitle: s.string(),
    _keysMap: {
      episodeId: "episode_id",
      episodeTitle: "episode_title",
      mentionCount: "mention_count",
      podcastTitle: "podcast_title",
    },
  },
  { additionalProperties: s.json() },
);
