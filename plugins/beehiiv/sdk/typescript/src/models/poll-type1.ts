import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of poll. */
export const PollType1 = {
  Voting: "voting",
  Trivia: "trivia",
} as const;
export type PollType1 = (typeof PollType1)[keyof typeof PollType1] | (string & {});

export const pollType1Schema: EnumSchema<PollType1> = s.enumOf<PollType1>(PollType1);
