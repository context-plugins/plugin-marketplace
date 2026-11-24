import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How feed articles are selected, by count or time window. */
export const RssSelectionMode = {
  Count: "count",
  Time: "time",
} as const;
export type RssSelectionMode = (typeof RssSelectionMode)[keyof typeof RssSelectionMode] | (string & {});

export const rssSelectionModeSchema: EnumSchema<RssSelectionMode> =
  s.enumOf<RssSelectionMode>(RssSelectionMode);
