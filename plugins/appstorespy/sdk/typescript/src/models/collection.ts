import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const Collection = {
  Free: "Free",
  Grossing: "Grossing",
  Paid: "Paid",
  TopsellingFree: "topselling_free",
  Topgrossing: "topgrossing",
  TopsellingPaid: "topselling_paid",
  TopsellingNewFree: "topselling_new_free",
  TopsellingNewPaid: "topselling_new_paid",
  MoversShakers: "movers_shakers",
} as const;
export type Collection = (typeof Collection)[keyof typeof Collection] | (string & {});

export const collectionSchema: EnumSchema<Collection> = s.enumOf<Collection>(Collection);
