import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { episodeInPodcastSchema, type EpisodeInPodcast } from "./episode-in-podcast.js";
import { podcastFullSchema, type PodcastFull } from "./podcast-full.js";

export type PodcastDetail = {
  podcast: PodcastFull;
  recentEpisodes: EpisodeInPodcast[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastDetailSchema: Schema<PodcastDetail> = s.object<PodcastDetail>(
  {
    podcast: podcastFullSchema,
    recentEpisodes: s.array(s.lazy(() => episodeInPodcastSchema)),
    _keysMap: {
      recentEpisodes: "recent_episodes",
    },
  },
  { additionalProperties: s.json() },
);
