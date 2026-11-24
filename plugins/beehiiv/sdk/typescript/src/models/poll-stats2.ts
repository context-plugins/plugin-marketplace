import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Aggregate statistics for the poll. Only included when `expand[]=stats` is specified. */
export type PollStats2 = {
  /** The total number of responses to this poll. */
  completions: number;
  /** A map of poll choice labels to the number of votes each choice received. */
  voteCounts: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollStats2Schema: Schema<PollStats2> = s.object<PollStats2>(
  {
    completions: s.int(),
    voteCounts: s.record(s.string(), s.int()),
    _keysMap: {
      voteCounts: "vote_counts",
    },
  },
  { additionalProperties: s.json() },
);
