import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source associated with the side-by-side feedback event. */
export const Source1 = {
  LiveEval: "LIVE_EVAL",
  Chat: "CHAT",
  Search: "SEARCH",
} as const;
export type Source1 = (typeof Source1)[keyof typeof Source1] | (string & {});

export const source1Schema: EnumSchema<Source1> = s.enumOf<Source1>(Source1);
