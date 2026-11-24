import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";
import { moderationLabelSchema, type ModerationLabel } from "./moderation-label.js";

export type ContentModerationDetection = {
  /**
   * Time, in milliseconds from the beginning of the video, that the content moderation label was
   * detected. Note that Timestamp is not guaranteed to be accurate to the individual frame where
   * the moderated content first appears.
   */
  timestamp?: number;
  moderationLabel?: ModerationLabel;
  /**
   * The time in milliseconds defining the start of the timeline segment containing a continuously
   * detected moderation label.
   */
  startTimestampMillis?: number;
  /**
   * The time in milliseconds defining the end of the timeline segment containing a continuously
   * detected moderation label.
   */
  endTimestampMillis?: number;
  /**
   * The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to
   * EndTimestampMillis.
   */
  durationMillis?: number;
  /**
   * A list of predicted results for the type of content an image contains. For example, the image
   * content might be from animation, sports, or a video game.
   */
  contentTypes?: ContentType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentModerationDetectionSchema: Schema<ContentModerationDetection> =
  s.object<ContentModerationDetection>(
    {
      timestamp: s.optional(s.int()),
      moderationLabel: s.optional(s.lazy(() => moderationLabelSchema)),
      startTimestampMillis: s.optional(s.int()),
      endTimestampMillis: s.optional(s.int()),
      durationMillis: s.optional(s.int()),
      contentTypes: s.optional(s.array(s.lazy(() => contentTypeSchema))),
      _keysMap: {
        timestamp: "Timestamp",
        moderationLabel: "ModerationLabel",
        startTimestampMillis: "StartTimestampMillis",
        endTimestampMillis: "EndTimestampMillis",
        durationMillis: "DurationMillis",
        contentTypes: "ContentTypes",
      },
    },
    { additionalProperties: s.json() },
  );
