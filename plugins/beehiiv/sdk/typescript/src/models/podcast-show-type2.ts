import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the podcast. */
export const PodcastShowType2 = {
  Episodic: "episodic",
  Serial: "serial",
} as const;
export type PodcastShowType2 = (typeof PodcastShowType2)[keyof typeof PodcastShowType2] | (string & {});

export const podcastShowType2Schema: EnumSchema<PodcastShowType2> =
  s.enumOf<PodcastShowType2>(PodcastShowType2);
