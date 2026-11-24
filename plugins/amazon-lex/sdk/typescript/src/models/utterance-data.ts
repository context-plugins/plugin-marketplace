import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UtteranceData = {
  /** The text that was entered by the user or the text representation of an audio clip. */
  utteranceString?: string;
  /** The number of times that the utterance was processed. */
  count?: number;
  /** The total number of individuals that used the utterance. */
  distinctUsers?: number;
  /** The date that the utterance was first recorded. */
  firstUtteredDate?: Date;
  /** The date that the utterance was last recorded. */
  lastUtteredDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceDataSchema: Schema<UtteranceData> = s.object<UtteranceData>(
  {
    utteranceString: s.optional(s.string()),
    count: s.optional(s.int()),
    distinctUsers: s.optional(s.int()),
    firstUtteredDate: s.optional(s.dateTime()),
    lastUtteredDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
