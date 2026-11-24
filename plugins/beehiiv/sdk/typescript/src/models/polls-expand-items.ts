import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PollsExpandItems = {
  Stats: "stats",
  PollResponses: "poll_responses",
  TriviaAnswer: "trivia_answer",
} as const;
export type PollsExpandItems = (typeof PollsExpandItems)[keyof typeof PollsExpandItems] | (string & {});

export const pollsExpandItemsSchema: EnumSchema<PollsExpandItems> =
  s.enumOf<PollsExpandItems>(PollsExpandItems);
