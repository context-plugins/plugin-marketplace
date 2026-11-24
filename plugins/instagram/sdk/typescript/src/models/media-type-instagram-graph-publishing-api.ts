import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of media to publish. */
export const MediaTypeInstagramGraphPublishingApi = {
  Image: "IMAGE",
  Video: "VIDEO",
  Reels: "REELS",
  Stories: "STORIES",
  Carousel: "CAROUSEL",
} as const;
export type MediaTypeInstagramGraphPublishingApi =
  | (typeof MediaTypeInstagramGraphPublishingApi)[keyof typeof MediaTypeInstagramGraphPublishingApi]
  | (string & {});

export const mediaTypeInstagramGraphPublishingApiSchema: EnumSchema<MediaTypeInstagramGraphPublishingApi> =
  s.enumOf<MediaTypeInstagramGraphPublishingApi>(MediaTypeInstagramGraphPublishingApi);
