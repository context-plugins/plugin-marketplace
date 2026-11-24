import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalAlternativeSchema, type MedicalAlternative } from "./medical-alternative.js";

export type MedicalResult = {
  /** Provides a unique identifier for the Result. */
  resultId?: string;
  /** The start time, in seconds, of the Result. */
  startTime?: number;
  /** The end time, in seconds, of the Result. */
  endTime?: number;
  /**
   * Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If
   * IsPartial is false, the segment is complete.
   */
  isPartial?: boolean;
  /**
   * A list of possible alternative transcriptions for the input audio. Each alternative may contain
   * one or more of Items, Entities, or Transcript.
   */
  alternatives?: MedicalAlternative[];
  /** Indicates the channel identified for the Result. */
  channelId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalResultSchema: Schema<MedicalResult> = s.object<MedicalResult>(
  {
    resultId: s.optional(s.string()),
    startTime: s.optional(s.float64()),
    endTime: s.optional(s.float64()),
    isPartial: s.optional(s.boolean()),
    alternatives: s.optional(s.array(s.lazy(() => medicalAlternativeSchema))),
    channelId: s.optional(s.string()),
    _keysMap: {
      resultId: "ResultId",
      startTime: "StartTime",
      endTime: "EndTime",
      isPartial: "IsPartial",
      alternatives: "Alternatives",
      channelId: "ChannelId",
    },
  },
  { additionalProperties: s.json() },
);
