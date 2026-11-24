import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  medicalScribeTranscriptItemSchema,
  type MedicalScribeTranscriptItem,
} from "./medical-scribe-transcript-item.js";

export type MedicalScribeTranscriptSegment = {
  /** The identifier of the segment. */
  segmentId?: string;
  /** The start time, in milliseconds, of the segment. */
  beginAudioTime?: number;
  /** The end time, in milliseconds, of the segment. */
  endAudioTime?: number;
  /** Contains transcribed text of the segment. */
  content?: string;
  /** Contains words, phrases, or punctuation marks in your segment. */
  items?: MedicalScribeTranscriptItem[];
  /**
   * Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If
   * IsPartial is false, the segment is complete.
   */
  isPartial?: boolean;
  /**
   * Indicates which audio channel is associated with the MedicalScribeTranscriptSegment. If
   * MedicalScribeChannelDefinition is not provided in the MedicalScribeConfigurationEvent, then
   * this field will not be included.
   */
  channelId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeTranscriptSegmentSchema: Schema<MedicalScribeTranscriptSegment> =
  s.object<MedicalScribeTranscriptSegment>(
    {
      segmentId: s.optional(s.string()),
      beginAudioTime: s.optional(s.float64()),
      endAudioTime: s.optional(s.float64()),
      content: s.optional(s.string()),
      items: s.optional(s.array(s.lazy(() => medicalScribeTranscriptItemSchema))),
      isPartial: s.optional(s.boolean()),
      channelId: s.optional(s.string()),
      _keysMap: {
        segmentId: "SegmentId",
        beginAudioTime: "BeginAudioTime",
        endAudioTime: "EndAudioTime",
        content: "Content",
        items: "Items",
        isPartial: "IsPartial",
        channelId: "ChannelId",
      },
    },
    { additionalProperties: s.json() },
  );
