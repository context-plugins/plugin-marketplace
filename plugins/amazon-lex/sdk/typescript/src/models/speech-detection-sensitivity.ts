import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps
 * optimize speech recognition accuracy by adjusting how the system responds to background noise
 * during voice interactions.
 */
export const SpeechDetectionSensitivity = {
  Default: "Default",
  HighNoiseTolerance: "HighNoiseTolerance",
  MaximumNoiseTolerance: "MaximumNoiseTolerance",
} as const;
export type SpeechDetectionSensitivity =
  | (typeof SpeechDetectionSensitivity)[keyof typeof SpeechDetectionSensitivity]
  | (string & {});

export const speechDetectionSensitivitySchema: EnumSchema<SpeechDetectionSensitivity> =
  s.enumOf<SpeechDetectionSensitivity>(SpeechDetectionSensitivity);
