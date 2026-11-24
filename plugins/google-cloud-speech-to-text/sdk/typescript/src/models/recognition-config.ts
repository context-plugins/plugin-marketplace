import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encodingSchema, type Encoding } from "./encoding.js";
import { recognitionMetadata2Schema, type RecognitionMetadata2 } from "./recognition-metadata2.js";
import {
  speakerDiarizationConfig2Schema,
  type SpeakerDiarizationConfig2,
} from "./speaker-diarization-config2.js";
import { speechAdaptation2Schema, type SpeechAdaptation2 } from "./speech-adaptation2.js";
import { speechContextSchema, type SpeechContext } from "./speech-context.js";
import {
  transcriptNormalization2Schema,
  type TranscriptNormalization2,
} from "./transcript-normalization2.js";

/** Provides information to the recognizer that specifies how to process the request. */
export type RecognitionConfig = {
  /**
   * If `true`, the top result includes a list of words and the confidence for those words. If
   * `false`, no word-level confidence information is returned. The default is `false`.
   */
  enableWordConfidence?: boolean;
  /**
   * If 'true', adds punctuation to recognition result hypotheses. This feature is only available in
   * select languages. Setting this for requests in other languages has no effect at all. The
   * default 'false' value does not add punctuation to result hypotheses.
   */
  enableAutomaticPunctuation?: boolean;
  /**
   * Set to true to use an enhanced model for speech recognition. If `use_enhanced` is set to true
   * and the `model` field is not set, then an appropriate enhanced model is chosen if an enhanced
   * model exists for the audio. If `use_enhanced` is true and an enhanced version of the specified
   * model does not exist, then the speech is recognized using the standard version of the specified
   * model.
   */
  useEnhanced?: boolean;
  /**
   * Speech adaptation configuration improves the accuracy of speech recognition. For more
   * information, see the [speech
   * adaptation](https://cloud.google.com/speech-to-text/docs/adaptation) documentation. When speech
   * adaptation is set it supersedes the `speech_contexts` field.
   */
  adaptation?: SpeechAdaptation2;
  /**
   * This needs to be set to `true` explicitly and `audio_channel_count` > 1 to get each channel
   * recognized separately. The recognition result will contain a `channel_tag` field to state which
   * channel that result belongs to. If this is not true, we will only recognize the first channel.
   * The request is billed cumulatively for all channels recognized: `audio_channel_count`
   * multiplied by the length of the audio.
   */
  enableSeparateRecognitionPerChannel?: boolean;
  /**
   * Metadata regarding this request.
   *
   * @deprecated
   */
  metadata?: RecognitionMetadata2;
  /**
   * The spoken punctuation behavior for the call If not set, uses default behavior based on model
   * of choice e.g. command_and_search will enable spoken punctuation by default If 'true', replaces
   * spoken punctuation with the corresponding symbols in the request. For example, "how are you
   * question mark" becomes "how are you?". See
   * https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If 'false', spoken
   * punctuation is not replaced.
   */
  enableSpokenPunctuation?: boolean;
  /**
   * A list of up to 3 additional [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language
   * tags, listing possible alternative languages of the supplied audio. See [Language
   * Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently
   * supported language codes. If alternative languages are listed, recognition result will contain
   * recognition in the most likely language detected including the main language_code. The
   * recognition result will include the language tag of the language detected in the audio. Note:
   * This feature is only supported for Voice Command and Voice Search use cases and performance may
   * vary for other use cases (e.g., phone call transcription).
   */
  alternativeLanguageCodes?: string[];
  /**
   * Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of
   * `SpeechRecognitionAlternative` messages within each `SpeechRecognitionResult`. The server may
   * return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will
   * return a maximum of one. If omitted, will return a maximum of one.
   */
  maxAlternatives?: number;
  /**
   * If set to `true`, the server will attempt to filter out profanities, replacing all but the
   * initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or
   * omitted, profanities won't be filtered out.
   */
  profanityFilter?: boolean;
  /**
   * Required. The language of the supplied audio as a
   * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See
   * [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the
   * currently supported language codes.
   */
  languageCode?: string;
  /**
   * Encoding of audio data sent in all `RecognitionAudio` messages. This field is optional for
   * `FLAC` and `WAV` audio files and required for all other audio formats. For details, see
   * AudioEncoding.
   */
  encoding?: Encoding;
  /**
   * Optional. Use transcription normalization to automatically replace parts of the transcript with
   * phrases of your choosing. For StreamingRecognize, this normalization only applies to stable
   * partial transcripts (stability > 0.8) and final transcripts.
   */
  transcriptNormalization?: TranscriptNormalization2;
  /**
   * Array of SpeechContext. A means to provide context to assist the speech recognition. For more
   * information, see [speech adaptation](https://cloud.google.com/speech-to-text/docs/adaptation).
   */
  speechContexts?: SpeechContext[];
  /**
   * The spoken emoji behavior for the call If not set, uses default behavior based on model of
   * choice If 'true', adds spoken emoji formatting for the request. This will replace spoken emojis
   * with the corresponding Unicode symbols in the final transcript. If 'false', spoken emojis are
   * not replaced.
   */
  enableSpokenEmojis?: boolean;
  /**
   * Which model to select for the given request. Select the model best suited to your domain to get
   * best results. If a model is not explicitly specified, then we auto-select a model based on the
   * parameters in the RecognitionConfig. *Model* *Description* latest_long Best for long form
   * content like media or conversation. latest_short Best for short form content like commands or
   * single shot directed speech. command_and_search Best for short queries such as voice commands
   * or voice search. phone_call Best for audio that originated from a phone call (typically
   * recorded at an 8khz sampling rate). video Best for audio that originated from video or includes
   * multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a
   * premium model that costs more than the standard rate. default Best for audio that is not one of
   * the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity,
   * recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that
   * originated from a conversation between a medical provider and patient. medical_dictation Best
   * for audio that originated from dictation notes by a medical provider.
   */
  model?: string;
  /**
   * The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition.
   * Valid values for LINEAR16, OGG_OPUS and FLAC are `1`-`8`. Valid value for MULAW, AMR, AMR_WB
   * and SPEEX_WITH_HEADER_BYTE is only `1`. If `0` or omitted, defaults to one channel (mono).
   * Note: We only recognize the first channel by default. To perform independent recognition on
   * each channel set `enable_separate_recognition_per_channel` to 'true'.
   */
  audioChannelCount?: number;
  /**
   * If `true`, the top result includes a list of words and the start and end time offsets
   * (timestamps) for those words. If `false`, no word-level time offset information is returned.
   * The default is `false`.
   */
  enableWordTimeOffsets?: boolean;
  /**
   * Config to enable speaker diarization and set additional parameters to make diarization better
   * suited for your application. Note: When this is enabled, we send all the words from the
   * beginning of the audio for the top alternative in every consecutive STREAMING responses. This
   * is done in order to improve our speaker tags as our models learn to identify the speakers in
   * the conversation over time. For non-streaming requests, the diarization results will be
   * provided only in the top alternative of the FINAL SpeechRecognitionResult.
   */
  diarizationConfig?: SpeakerDiarizationConfig2;
  /**
   * Sample rate in Hertz of the audio data sent in all `RecognitionAudio` messages. Valid values
   * are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source
   * to 16000 Hz. If that's not possible, use the native sample rate of the audio source (instead of
   * re-sampling). This field is optional for FLAC and WAV audio files, but is required for all
   * other audio formats. For details, see AudioEncoding.
   */
  sampleRateHertz?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognitionConfigSchema: Schema<RecognitionConfig> = s.object<RecognitionConfig>(
  {
    enableWordConfidence: s.optional(s.boolean()),
    enableAutomaticPunctuation: s.optional(s.boolean()),
    useEnhanced: s.optional(s.boolean()),
    adaptation: s.optional(s.lazy(() => speechAdaptation2Schema)),
    enableSeparateRecognitionPerChannel: s.optional(s.boolean()),
    metadata: s.optional(s.lazy(() => recognitionMetadata2Schema)),
    enableSpokenPunctuation: s.optional(s.boolean()),
    alternativeLanguageCodes: s.optional(s.array(s.string())),
    maxAlternatives: s.optional(s.int()),
    profanityFilter: s.optional(s.boolean()),
    languageCode: s.optional(s.string()),
    encoding: s.optional(s.lazy(() => encodingSchema)),
    transcriptNormalization: s.optional(s.lazy(() => transcriptNormalization2Schema)),
    speechContexts: s.optional(s.array(s.lazy(() => speechContextSchema))),
    enableSpokenEmojis: s.optional(s.boolean()),
    model: s.optional(s.string()),
    audioChannelCount: s.optional(s.int()),
    enableWordTimeOffsets: s.optional(s.boolean()),
    diarizationConfig: s.optional(s.lazy(() => speakerDiarizationConfig2Schema)),
    sampleRateHertz: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
