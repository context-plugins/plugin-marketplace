import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { absoluteTimeRangeSchema, type AbsoluteTimeRange } from "./absolute-time-range.js";
import { participantRole1Schema, type ParticipantRole1 } from "./participant-role1.js";
import { relativeTimeRangeSchema, type RelativeTimeRange } from "./relative-time-range.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

export type SentimentFilter = {
  /** Specify the sentiments that you want to flag. */
  sentiments: Sentiment[];
  absoluteTimeRange?: AbsoluteTimeRange;
  relativeTimeRange?: RelativeTimeRange;
  /**
   * Specify the participant that you want to flag. Omitting this parameter is equivalent to
   * specifying both participants.
   */
  participantRole?: ParticipantRole1;
  /**
   * Set to TRUE to flag the sentiments that you didn't include in your request. Set to FALSE to
   * flag the sentiments that you specified in your request.
   */
  negate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentimentFilterSchema: Schema<SentimentFilter> = s.object<SentimentFilter>(
  {
    sentiments: s.array(s.lazy(() => sentimentSchema)),
    absoluteTimeRange: s.optional(s.lazy(() => absoluteTimeRangeSchema)),
    relativeTimeRange: s.optional(s.lazy(() => relativeTimeRangeSchema)),
    participantRole: s.optional(s.lazy(() => participantRole1Schema)),
    negate: s.optional(s.boolean()),
    _keysMap: {
      sentiments: "Sentiments",
      absoluteTimeRange: "AbsoluteTimeRange",
      relativeTimeRange: "RelativeTimeRange",
      participantRole: "ParticipantRole",
      negate: "Negate",
    },
  },
  { additionalProperties: s.json() },
);
