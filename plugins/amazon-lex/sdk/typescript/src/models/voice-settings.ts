import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { engineSchema, type Engine } from "./engine.js";

export type VoiceSettings = {
  /**
   * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with
   * the user. For more information, see the engine parameter of the SynthesizeSpeech operation in
   * the Amazon Polly developer guide. If you do not specify a value, the default is standard.
   */
  engine?: Engine;
  /** The identifier of the Amazon Polly voice to use. */
  voiceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const voiceSettingsSchema: Schema<VoiceSettings> = s.object<VoiceSettings>(
  {
    engine: s.optional(s.lazy(() => engineSchema)),
    voiceId: s.string(),
  },
  { additionalProperties: s.json() },
);
