import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the podcast. */
export const PodcastShowStatus2 = {
  Draft: "draft",
  Live: "live",
  Archived: "archived",
} as const;
export type PodcastShowStatus2 = (typeof PodcastShowStatus2)[keyof typeof PodcastShowStatus2] | (string & {});

export const podcastShowStatus2Schema: EnumSchema<PodcastShowStatus2> =
  s.enumOf<PodcastShowStatus2>(PodcastShowStatus2);
