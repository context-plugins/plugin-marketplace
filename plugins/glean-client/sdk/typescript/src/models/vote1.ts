import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The vote for this specific implementation. */
export const Vote1 = {
  Upvote: "UPVOTE",
  Downvote: "DOWNVOTE",
  Neutral: "NEUTRAL",
} as const;
export type Vote1 = (typeof Vote1)[keyof typeof Vote1] | (string & {});

export const vote1Schema: EnumSchema<Vote1> = s.enumOf<Vote1>(Vote1);
