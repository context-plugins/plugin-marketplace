import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dictionaryMetadataSchema, type DictionaryMetadata } from "./dictionary-metadata.js";
import { pronunciationOverrideSchema, type PronunciationOverride } from "./pronunciation-override.js";
import { voiceDisplayInfoSchema, type VoiceDisplayInfo } from "./voice-display-info.js";

/**
 * Container for all TTS pronunciation overrides belonging to the sub-organisation.
 *
 * Stored in the `config_values` table via ConfigDao. The Syllable API persists uploaded CSV
 * pronunciation rules, and Bubblegum's PronunciationOverridesPlugin reads them to apply text
 * replacements before TTS processing.
 *
 * Example: dao = ConfigDao(db_session) await dao.register_model('tts.pronunciations',
 * PronunciationOverridesDictionary)
 *
 * pod = PronunciationOverridesDictionary( pronunciations=[...],
 * metadata=DictionaryMetadata(entries=10, hash='sha256:...'), ) result = await
 * dao.upsert('pronunciations_v1', pod)
 *
 * record = await dao.get('pronunciations_v1', PronunciationOverridesDictionary) if record:
 * pronunciations = record.value.pronunciations
 */
export type PronunciationOverridesDictionary = {
  /** @default "pronunciations_v1" */
  type?: string;
  pronunciations: PronunciationOverride[];
  voices?: Record<string, VoiceDisplayInfo>;
  /** Audit metadata associated with a dictionary. */
  metadata: DictionaryMetadata;
};

export const pronunciationOverridesDictionarySchema: Schema<PronunciationOverridesDictionary> =
  s.object<PronunciationOverridesDictionary>({
    type: s.defaulted(s.string(), "pronunciations_v1"),
    pronunciations: s.array(s.lazy(() => pronunciationOverrideSchema)),
    voices: s.optional(
      s.record(
        s.string(),
        s.lazy(() => voiceDisplayInfoSchema),
      ),
    ),
    metadata: dictionaryMetadataSchema,
  });
