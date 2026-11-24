import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the podcast.<br>`draft` - No episodes have been published.<br> `live` - Published
 * and active.<br>`archived` - The podcast is no longer active.
 */
export const PodcastShowStatus = {
  Draft: "draft",
  Live: "live",
  Archived: "archived",
} as const;
export type PodcastShowStatus = (typeof PodcastShowStatus)[keyof typeof PodcastShowStatus] | (string & {});

export const podcastShowStatusSchema: EnumSchema<PodcastShowStatus> =
  s.enumOf<PodcastShowStatus>(PodcastShowStatus);
