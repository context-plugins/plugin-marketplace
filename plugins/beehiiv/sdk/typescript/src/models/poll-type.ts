import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PollType = {
  Voting: "voting",
  Trivia: "trivia",
} as const;
export type PollType = (typeof PollType)[keyof typeof PollType] | (string & {});

export const pollTypeSchema: EnumSchema<PollType> = s.enumOf<PollType>(PollType);
