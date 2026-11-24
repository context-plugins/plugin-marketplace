import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the podcast.<br>`episodic` - Episodes can be consumed in any order.<br>`serial` -
 * Episodes are intended to be consumed in order.
 */
export const PodcastShowType = {
  Episodic: "episodic",
  Serial: "serial",
} as const;
export type PodcastShowType = (typeof PodcastShowType)[keyof typeof PodcastShowType] | (string & {});

export const podcastShowTypeSchema: EnumSchema<PodcastShowType> = s.enumOf<PodcastShowType>(PodcastShowType);
