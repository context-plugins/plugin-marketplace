import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to select feed articles, by count or time window. */
export const RssSelectionMode1 = {
  Count: "count",
  Time: "time",
} as const;
export type RssSelectionMode1 = (typeof RssSelectionMode1)[keyof typeof RssSelectionMode1] | (string & {});

export const rssSelectionMode1Schema: EnumSchema<RssSelectionMode1> =
  s.enumOf<RssSelectionMode1>(RssSelectionMode1);
