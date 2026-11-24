import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UtteranceAudioInputSpecification = {
  /** Amazon S3 file pointing to the audio. */
  audioFileS3Location: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceAudioInputSpecificationSchema: Schema<UtteranceAudioInputSpecification> =
  s.object<UtteranceAudioInputSpecification>(
    {
      audioFileS3Location: s.string(),
    },
    { additionalProperties: s.json() },
  );
