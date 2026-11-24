import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SpeechFoundationModel = {
  /** The Amazon Resource Name (ARN) of the foundation model used for speech processing. */
  modelArn: string;
  /** The identifier of the voice to use for speech synthesis with the foundation model. */
  voiceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speechFoundationModelSchema: Schema<SpeechFoundationModel> = s.object<SpeechFoundationModel>(
  {
    modelArn: s.string(),
    voiceId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
