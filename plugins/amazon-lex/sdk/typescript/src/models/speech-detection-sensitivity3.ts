import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The new sensitivity level for voice activity detection (VAD) in the bot locale. This setting
 * helps optimize speech recognition accuracy by adjusting how the system responds to background
 * noise during voice interactions.
 */
export const SpeechDetectionSensitivity3 = {
  Default: "Default",
  HighNoiseTolerance: "HighNoiseTolerance",
  MaximumNoiseTolerance: "MaximumNoiseTolerance",
} as const;
export type SpeechDetectionSensitivity3 =
  | (typeof SpeechDetectionSensitivity3)[keyof typeof SpeechDetectionSensitivity3]
  | (string & {});

export const speechDetectionSensitivity3Schema: EnumSchema<SpeechDetectionSensitivity3> =
  s.enumOf<SpeechDetectionSensitivity3>(SpeechDetectionSensitivity3);
