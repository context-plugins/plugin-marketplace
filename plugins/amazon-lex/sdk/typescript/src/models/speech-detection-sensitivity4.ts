import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The updated sensitivity level for voice activity detection (VAD) in the bot locale. */
export const SpeechDetectionSensitivity4 = {
  Default: "Default",
  HighNoiseTolerance: "HighNoiseTolerance",
  MaximumNoiseTolerance: "MaximumNoiseTolerance",
} as const;
export type SpeechDetectionSensitivity4 =
  | (typeof SpeechDetectionSensitivity4)[keyof typeof SpeechDetectionSensitivity4]
  | (string & {});

export const speechDetectionSensitivity4Schema: EnumSchema<SpeechDetectionSensitivity4> =
  s.enumOf<SpeechDetectionSensitivity4>(SpeechDetectionSensitivity4);
