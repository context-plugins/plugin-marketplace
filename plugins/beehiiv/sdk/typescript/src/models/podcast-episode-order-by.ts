import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The field that episode list results are sorted by. Defaults to `displayed_date`<br>`created` -
 * The time in which the episode was first created.<br>`updated` - The time the episode was last
 * updated.<br>`publish_date` - The exact time the system published the episode (when it went live),
 * not the scheduled time the user set.<br> `displayed_date` - The time displayed in place of the
 * `publish_date`. Uses a custom display date if set, otherwise the scheduled time the user set for
 * publication, otherwise the `publish_date`, otherwise the creation date. For imported episodes,
 * the original feed's `pubDate` is stored as the custom display date. This is the same field used
 * to order episodes in the podcast's RSS feed.
 */
export const PodcastEpisodeOrderBy = {
  Created: "created",
  Updated: "updated",
  PublishDate: "publish_date",
  DisplayedDate: "displayed_date",
} as const;
export type PodcastEpisodeOrderBy =
  | (typeof PodcastEpisodeOrderBy)[keyof typeof PodcastEpisodeOrderBy]
  | (string & {});

export const podcastEpisodeOrderBySchema: EnumSchema<PodcastEpisodeOrderBy> =
  s.enumOf<PodcastEpisodeOrderBy>(PodcastEpisodeOrderBy);
