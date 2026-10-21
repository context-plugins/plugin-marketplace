import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The vote associated with the Feedback.event.MANUAL_FEEDBACK event. */
export const Vote = {
  Upvote: "UPVOTE",
  Downvote: "DOWNVOTE",
} as const;
export type Vote = (typeof Vote)[keyof typeof Vote] | (string & {});

export const voteSchema: EnumSchema<Vote> = s.enumOf<Vote>(Vote);
