import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastEpisodeSchema, type PodcastEpisode } from "./podcast-episode.js";

export type PodcastEpisodeGetResponse = {
  data: PodcastEpisode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastEpisodeGetResponseSchema: Schema<PodcastEpisodeGetResponse> =
  s.object<PodcastEpisodeGetResponse>(
    {
      data: podcastEpisodeSchema,
    },
    { additionalProperties: s.json() },
  );
