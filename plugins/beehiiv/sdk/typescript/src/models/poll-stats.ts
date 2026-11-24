import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PollStats = {
  /** The total number of responses to this poll. */
  completions: number;
  /** A map of poll choice labels to the number of votes each choice received. */
  voteCounts: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollStatsSchema: Schema<PollStats> = s.object<PollStats>(
  {
    completions: s.int(),
    voteCounts: s.record(s.string(), s.int()),
    _keysMap: {
      voteCounts: "vote_counts",
    },
  },
  { additionalProperties: s.json() },
);
