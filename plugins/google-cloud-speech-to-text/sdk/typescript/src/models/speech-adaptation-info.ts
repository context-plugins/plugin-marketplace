import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information on speech adaptation use in results */
export type SpeechAdaptationInfo = {
  /** If set, returns a message specifying which part of the speech adaptation request timed out. */
  timeoutMessage?: string;
  /**
   * Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect
   * in the response transcript.
   */
  adaptationTimeout?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speechAdaptationInfoSchema: Schema<SpeechAdaptationInfo> = s.object<SpeechAdaptationInfo>(
  {
    timeoutMessage: s.optional(s.string()),
    adaptationTimeout: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
