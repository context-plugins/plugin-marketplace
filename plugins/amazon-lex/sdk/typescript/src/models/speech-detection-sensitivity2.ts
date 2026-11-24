import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The sensitivity level for voice activity detection (VAD) configured for the bot locale. */
export const SpeechDetectionSensitivity2 = {
  Default: "Default",
  HighNoiseTolerance: "HighNoiseTolerance",
  MaximumNoiseTolerance: "MaximumNoiseTolerance",
} as const;
export type SpeechDetectionSensitivity2 =
  | (typeof SpeechDetectionSensitivity2)[keyof typeof SpeechDetectionSensitivity2]
  | (string & {});

export const speechDetectionSensitivity2Schema: EnumSchema<SpeechDetectionSensitivity2> =
  s.enumOf<SpeechDetectionSensitivity2>(SpeechDetectionSensitivity2);
