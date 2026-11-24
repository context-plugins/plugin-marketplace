import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const DevSortEnum = {
  Revenue: "revenue",
  Revenue2: "-revenue",
  Downloads: "downloads",
  Downloads2: "-downloads",
  TotalApps: "total_apps",
  TotalApps2: "-total_apps",
  PublishedApps: "published_apps",
  PublishedApps2: "-published_apps",
  RatingCount: "rating_count",
  RatingCount2: "-rating_count",
  FirstReleased: "first_released",
  FirstReleased2: "-first_released",
  LastUpdated: "last_updated",
  LastUpdated2: "-last_updated",
} as const;
export type DevSortEnum = (typeof DevSortEnum)[keyof typeof DevSortEnum] | (string & {});

export const devSortEnumSchema: EnumSchema<DevSortEnum> = s.enumOf<DevSortEnum>(DevSortEnum);
