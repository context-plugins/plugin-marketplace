import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The layout of the articles from the feed. */
export const RssBlockLayout = {
  _1Col: "1-col",
  _2Col: "2-col",
  _3Col: "3-col",
  _4Col: "4-col",
} as const;
export type RssBlockLayout = (typeof RssBlockLayout)[keyof typeof RssBlockLayout] | (string & {});

export const rssBlockLayoutSchema: EnumSchema<RssBlockLayout> = s.enumOf<RssBlockLayout>(RssBlockLayout);
