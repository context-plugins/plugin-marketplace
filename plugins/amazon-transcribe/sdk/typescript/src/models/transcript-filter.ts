import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { absoluteTimeRangeSchema, type AbsoluteTimeRange } from "./absolute-time-range.js";
import { participantRole1Schema, type ParticipantRole1 } from "./participant-role1.js";
import { relativeTimeRangeSchema, type RelativeTimeRange } from "./relative-time-range.js";

export type TranscriptFilter = {
  /**
   * Flag the presence or absence of an exact match to the phrases that you specify. For example, if
   * you specify the phrase "speak to a manager" as your Targets value, only that exact phrase is
   * flagged. Note that semantic matching is not supported. For example, if your customer says
   * "speak to the manager", instead of "speak to a manager", your content is not flagged.
   *
   * @default "EXACT"
   */
  transcriptFilterType?: "EXACT";
  absoluteTimeRange?: AbsoluteTimeRange;
  relativeTimeRange?: RelativeTimeRange;
  /**
   * Specify the participant that you want to flag. Omitting this parameter is equivalent to
   * specifying both participants.
   */
  participantRole?: ParticipantRole1;
  /**
   * Set to TRUE to flag the absence of the phrase that you specified in your request. Set to FALSE
   * to flag the presence of the phrase that you specified in your request.
   */
  negate?: boolean;
  /** Specify the phrases that you want to flag. */
  targets: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptFilterSchema: Schema<TranscriptFilter> = s.object<TranscriptFilter>(
  {
    transcriptFilterType: s.defaulted(s.literal("EXACT"), "EXACT"),
    absoluteTimeRange: s.optional(s.lazy(() => absoluteTimeRangeSchema)),
    relativeTimeRange: s.optional(s.lazy(() => relativeTimeRangeSchema)),
    participantRole: s.optional(s.lazy(() => participantRole1Schema)),
    negate: s.optional(s.boolean()),
    targets: s.array(s.string()),
    _keysMap: {
      transcriptFilterType: "TranscriptFilterType",
      absoluteTimeRange: "AbsoluteTimeRange",
      relativeTimeRange: "RelativeTimeRange",
      participantRole: "ParticipantRole",
      negate: "Negate",
      targets: "Targets",
    },
  },
  { additionalProperties: s.json() },
);
