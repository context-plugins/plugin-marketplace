import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  utteranceAudioInputSpecificationSchema,
  type UtteranceAudioInputSpecification,
} from "./utterance-audio-input-specification.js";

export type UtteranceInputSpecification = {
  /**
   * A text input transcription of the utterance. It is only applicable for test-sets containing
   * text data.
   */
  textInput?: string;
  audioInput?: UtteranceAudioInputSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceInputSpecificationSchema: Schema<UtteranceInputSpecification> =
  s.object<UtteranceInputSpecification>(
    {
      textInput: s.optional(s.string()),
      audioInput: s.optional(s.lazy(() => utteranceAudioInputSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
