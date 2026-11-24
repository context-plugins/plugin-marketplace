import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociatedTranscript = {
  /**
   * The content of the transcript that meets the search filter criteria. For the JSON format of the
   * transcript, see Output transcript format.
   */
  transcript?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associatedTranscriptSchema: Schema<AssociatedTranscript> = s.object<AssociatedTranscript>(
  {
    transcript: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
