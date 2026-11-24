import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the episode.<br>`draft` - Not yet published.<br>`scheduled` - Scheduled for future
 * publication.<br>`published` - Available via web and RSS.<br>`archived` - No longer available via
 * web or RSS.
 */
export const PodcastEpisodeStatus = {
  Draft: "draft",
  Scheduled: "scheduled",
  Published: "published",
  Archived: "archived",
} as const;
export type PodcastEpisodeStatus =
  | (typeof PodcastEpisodeStatus)[keyof typeof PodcastEpisodeStatus]
  | (string & {});

export const podcastEpisodeStatusSchema: EnumSchema<PodcastEpisodeStatus> =
  s.enumOf<PodcastEpisodeStatus>(PodcastEpisodeStatus);
