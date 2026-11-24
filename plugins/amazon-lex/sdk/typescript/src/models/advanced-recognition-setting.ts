import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audioRecognitionStrategySchema,
  type AudioRecognitionStrategy,
} from "./audio-recognition-strategy.js";

export type AdvancedRecognitionSetting = {
  /** Enables using the slot values as a custom vocabulary for recognizing user utterances. */
  audioRecognitionStrategy?: AudioRecognitionStrategy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const advancedRecognitionSettingSchema: Schema<AdvancedRecognitionSetting> =
  s.object<AdvancedRecognitionSetting>(
    {
      audioRecognitionStrategy: s.optional(s.lazy(() => audioRecognitionStrategySchema)),
    },
    { additionalProperties: s.json() },
  );
