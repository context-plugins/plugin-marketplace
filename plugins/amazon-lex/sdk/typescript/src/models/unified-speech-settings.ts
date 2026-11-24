import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { speechFoundationModelSchema, type SpeechFoundationModel } from "./speech-foundation-model.js";

export type UnifiedSpeechSettings = {
  speechFoundationModel: SpeechFoundationModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unifiedSpeechSettingsSchema: Schema<UnifiedSpeechSettings> = s.object<UnifiedSpeechSettings>(
  {
    speechFoundationModel: speechFoundationModelSchema,
  },
  { additionalProperties: s.json() },
);
