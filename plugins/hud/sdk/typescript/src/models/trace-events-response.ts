import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./unions/event.js";
import { rewardSchema, type Reward } from "./unions/reward.js";

export type TraceEventsResponse = {
  events: Event[];
  latestSeq: number;
  nextSeq: number;
  hasMore: boolean;
  status: string;
  reward?: Reward;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceEventsResponseSchema: Schema<TraceEventsResponse> = s.object<TraceEventsResponse>(
  {
    events: s.array(s.lazy(() => eventSchema)),
    latestSeq: s.int(),
    nextSeq: s.int(),
    hasMore: s.boolean(),
    status: s.string(),
    reward: s.optional(s.lazy(() => rewardSchema)),
    _keysMap: {
      latestSeq: "latest_seq",
      nextSeq: "next_seq",
      hasMore: "has_more",
    },
  },
  { additionalProperties: s.json() },
);
