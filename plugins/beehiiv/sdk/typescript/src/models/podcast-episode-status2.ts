import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the episode. */
export const PodcastEpisodeStatus2 = {
  Draft: "draft",
  Scheduled: "scheduled",
  Published: "published",
  Archived: "archived",
} as const;
export type PodcastEpisodeStatus2 =
  | (typeof PodcastEpisodeStatus2)[keyof typeof PodcastEpisodeStatus2]
  | (string & {});

export const podcastEpisodeStatus2Schema: EnumSchema<PodcastEpisodeStatus2> =
  s.enumOf<PodcastEpisodeStatus2>(PodcastEpisodeStatus2);
