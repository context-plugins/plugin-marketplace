import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The sensitivity level for voice activity detection (VAD) that was specified for the bot locale.
 */
export const SpeechDetectionSensitivity1 = {
  Default: "Default",
  HighNoiseTolerance: "HighNoiseTolerance",
  MaximumNoiseTolerance: "MaximumNoiseTolerance",
} as const;
export type SpeechDetectionSensitivity1 =
  | (typeof SpeechDetectionSensitivity1)[keyof typeof SpeechDetectionSensitivity1]
  | (string & {});

export const speechDetectionSensitivity1Schema: EnumSchema<SpeechDetectionSensitivity1> =
  s.enumOf<SpeechDetectionSensitivity1>(SpeechDetectionSensitivity1);
