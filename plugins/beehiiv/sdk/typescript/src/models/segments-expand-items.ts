import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SegmentsExpandItems = {
  Stats: "stats",
} as const;
export type SegmentsExpandItems =
  | (typeof SegmentsExpandItems)[keyof typeof SegmentsExpandItems]
  | (string & {});

export const segmentsExpandItemsSchema: EnumSchema<SegmentsExpandItems> =
  s.enumOf<SegmentsExpandItems>(SegmentsExpandItems);
