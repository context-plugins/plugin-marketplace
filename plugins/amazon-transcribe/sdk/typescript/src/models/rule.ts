import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interruptionFilterSchema, type InterruptionFilter } from "./interruption-filter.js";
import { nonTalkTimeFilterSchema, type NonTalkTimeFilter } from "./non-talk-time-filter.js";
import { sentimentFilterSchema, type SentimentFilter } from "./sentiment-filter.js";
import { transcriptFilterSchema, type TranscriptFilter } from "./transcript-filter.js";

/** Exactly one member is set. */
export type Rule = {
  nonTalkTimeFilter?: NonTalkTimeFilter;
  interruptionFilter?: InterruptionFilter;
  transcriptFilter?: TranscriptFilter;
  sentimentFilter?: SentimentFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleSchema: Schema<Rule> = s.object<Rule>(
  {
    nonTalkTimeFilter: s.optional(s.lazy(() => nonTalkTimeFilterSchema)),
    interruptionFilter: s.optional(s.lazy(() => interruptionFilterSchema)),
    transcriptFilter: s.optional(s.lazy(() => transcriptFilterSchema)),
    sentimentFilter: s.optional(s.lazy(() => sentimentFilterSchema)),
    _keysMap: {
      nonTalkTimeFilter: "NonTalkTimeFilter",
      interruptionFilter: "InterruptionFilter",
      transcriptFilter: "TranscriptFilter",
      sentimentFilter: "SentimentFilter",
    },
  },
  { additionalProperties: s.json() },
);
