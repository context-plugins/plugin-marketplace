import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pollChoiceSchema, type PollChoice } from "./poll-choice.js";
import { pollResponseItemSchema, type PollResponseItem } from "./poll-response-item.js";
import { pollStats2Schema, type PollStats2 } from "./poll-stats2.js";
import { pollStatus2Schema, type PollStatus2 } from "./poll-status2.js";
import { pollType1Schema, type PollType1 } from "./poll-type1.js";

export type Poll = {
  /** The prefixed ID of the poll. */
  id: string;
  /** The name of the poll. */
  name: string;
  /** The poll question text. */
  question: string;
  /** An optional description of the poll. */
  description?: string;
  /** The type of poll. */
  pollType: PollType1;
  /** The current status of the poll. */
  status: PollStatus2;
  /** The time the poll was created. Measured in seconds since the Unix epoch. */
  createdAt: number;
  /** The available choices for this poll. */
  pollChoices: PollChoice[];
  /**
   * The correct answer for trivia-type polls. Only included when `expand[]=trivia_answer` is
   * specified and the poll is of type trivia.
   */
  triviaAnswer?: string;
  /** Aggregate statistics for the poll. Only included when `expand[]=stats` is specified. */
  stats?: PollStats2;
  /**
   * Total number of responses to this poll. Only included when `expand[]=poll_responses` is
   * specified.
   */
  totalResponses?: number;
  /**
   * Up to 10 most recent subscriber responses. Only included when `expand[]=poll_responses` is
   * specified. Use /polls/{pollId}/responses for paginated access to all responses.
   */
  pollResponses?: PollResponseItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollSchema: Schema<Poll> = s.object<Poll>(
  {
    id: s.string(),
    name: s.string(),
    question: s.string(),
    description: s.optional(s.string()),
    pollType: pollType1Schema,
    status: pollStatus2Schema,
    createdAt: s.int(),
    pollChoices: s.array(s.lazy(() => pollChoiceSchema)),
    triviaAnswer: s.optional(s.string()),
    stats: s.optional(s.lazy(() => pollStats2Schema)),
    totalResponses: s.optional(s.int()),
    pollResponses: s.optional(s.array(s.lazy(() => pollResponseItemSchema))),
    _keysMap: {
      pollType: "poll_type",
      createdAt: "created_at",
      pollChoices: "poll_choices",
      triviaAnswer: "trivia_answer",
      totalResponses: "total_responses",
      pollResponses: "poll_responses",
    },
  },
  { additionalProperties: s.json() },
);
