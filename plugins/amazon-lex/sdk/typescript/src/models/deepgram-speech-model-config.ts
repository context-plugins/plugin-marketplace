import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeepgramSpeechModelConfig = {
  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the Deepgram API
   * token.
   */
  apiTokenSecretArn: string;
  /** The identifier of the Deepgram speech-to-text model to use for processing speech input. */
  modelId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deepgramSpeechModelConfigSchema: Schema<DeepgramSpeechModelConfig> =
  s.object<DeepgramSpeechModelConfig>(
    {
      apiTokenSecretArn: s.string(),
      modelId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
