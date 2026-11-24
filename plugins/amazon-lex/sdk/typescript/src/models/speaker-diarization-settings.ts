import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SpeakerDiarizationSettings = {
  /**
   * Specifies whether speaker diarization is enabled for the bot locale. Set to true to have Amazon
   * Lex treat speech from speakers other than the primary speaker as non-speech. Set to false to
   * disable speaker diarization and rely on voice activity detection alone.
   */
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speakerDiarizationSettingsSchema: Schema<SpeakerDiarizationSettings> =
  s.object<SpeakerDiarizationSettings>(
    {
      enabled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
