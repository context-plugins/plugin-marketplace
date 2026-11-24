from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.encoding import EncodingOrStr
from .recognition_metadata2 import RecognitionMetadata2, RecognitionMetadata2Dict
from .speaker_diarization_config2 import SpeakerDiarizationConfig2, SpeakerDiarizationConfig2Dict
from .speech_adaptation2 import SpeechAdaptation2, SpeechAdaptation2Dict
from .speech_context import SpeechContext, SpeechContextDict
from .transcript_normalization2 import TranscriptNormalization2, TranscriptNormalization2Dict


class RecognitionConfig2(SdkBaseModel):
    """Required. Provides information to the recognizer that specifies how to process the request."""

    enable_word_confidence: Optional[bool] = Field(default=UNSET, alias="enableWordConfidence")
    """If ``true``, the top result includes a list of words and the confidence for those words. If ``false``, no
    word-level confidence information is returned. The default is ``false``."""

    enable_automatic_punctuation: Optional[bool] = Field(default=UNSET, alias="enableAutomaticPunctuation")
    """If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages.
    Setting this for requests in other languages has no effect at all. The default 'false' value does not add
    punctuation to result hypotheses."""

    use_enhanced: Optional[bool] = Field(default=UNSET, alias="useEnhanced")
    """Set to true to use an enhanced model for speech recognition. If ``use_enhanced`` is set to true and the ``model``
    field is not set, then an appropriate enhanced model is chosen if an enhanced model exists for the audio. If
    ``use_enhanced`` is true and an enhanced version of the specified model does not exist, then the speech is
    recognized using the standard version of the specified model."""

    adaptation: Optional[SpeechAdaptation2] = UNSET
    """Speech adaptation configuration improves the accuracy of speech recognition. For more information, see the
    `speech adaptation <https://cloud.google.com/speech-to-text/docs/adaptation>`__ documentation. When speech
    adaptation is set it supersedes the ``speech_contexts`` field."""

    enable_separate_recognition_per_channel: Optional[bool] = Field(
        default=UNSET, alias="enableSeparateRecognitionPerChannel"
    )
    """This needs to be set to ``true`` explicitly and ``audio_channel_count`` > 1 to get each channel recognized
    separately. The recognition result will contain a ``channel_tag`` field to state which channel that result belongs
    to. If this is not true, we will only recognize the first channel. The request is billed cumulatively for all
    channels recognized: ``audio_channel_count`` multiplied by the length of the audio."""

    metadata: Optional[RecognitionMetadata2] = UNSET
    """Metadata regarding this request."""

    enable_spoken_punctuation: Optional[bool] = Field(default=UNSET, alias="enableSpokenPunctuation")
    """The spoken punctuation behavior for the call If not set, uses default behavior based on model of choice e.g.
    command_and_search will enable spoken punctuation by default If 'true', replaces spoken punctuation with the
    corresponding symbols in the request. For example, "how are you question mark" becomes "how are you?". See
    https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If 'false', spoken punctuation is not
    replaced."""

    alternative_language_codes: Optional[list[str]] = Field(default=UNSET, alias="alternativeLanguageCodes")
    """A list of up to 3 additional `BCP-47 <https://www.rfc-editor.org/rfc/bcp/bcp47.txt>`__ language tags, listing
    possible alternative languages of the supplied audio. See `Language Support
    <https://cloud.google.com/speech-to-text/docs/languages>`__ for a list of the currently supported language codes. If
    alternative languages are listed, recognition result will contain recognition in the most likely language detected
    including the main language_code. The recognition result will include the language tag of the language detected in
    the audio. Note: This feature is only supported for Voice Command and Voice Search use cases and performance may
    vary for other use cases (e.g., phone call transcription)."""

    max_alternatives: Optional[int] = Field(default=UNSET, alias="maxAlternatives")
    """Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of
    ``SpeechRecognitionAlternative`` messages within each ``SpeechRecognitionResult``. The server may return fewer than
    ``max_alternatives``. Valid values are ``0``-``30``. A value of ``0`` or ``1`` will return a maximum of one. If
    omitted, will return a maximum of one."""

    profanity_filter: Optional[bool] = Field(default=UNSET, alias="profanityFilter")
    """If set to ``true``, the server will attempt to filter out profanities, replacing all but the initial character in
    each filtered word with asterisks, e.g. "f***". If set to ``false`` or omitted, profanities won't be filtered
    out."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """Required. The language of the supplied audio as a `BCP-47 <https://www.rfc-editor.org/rfc/bcp/bcp47.txt>`__
    language tag. Example: "en-US". See `Language Support <https://cloud.google.com/speech-to-text/docs/languages>`__
    for a list of the currently supported language codes."""

    encoding: Optional[EncodingOrStr] = UNSET
    """Encoding of audio data sent in all ``RecognitionAudio`` messages. This field is optional for ``FLAC`` and ``WAV``
    audio files and required for all other audio formats. For details, see AudioEncoding."""

    transcript_normalization: Optional[TranscriptNormalization2] = Field(default=UNSET, alias="transcriptNormalization")
    """Optional. Use transcription normalization to automatically replace parts of the transcript with phrases of your
    choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8)
    and final transcripts."""

    speech_contexts: Optional[list[SpeechContext]] = Field(default=UNSET, alias="speechContexts")
    """Array of SpeechContext. A means to provide context to assist the speech recognition. For more information, see
    `speech adaptation <https://cloud.google.com/speech-to-text/docs/adaptation>`__."""

    enable_spoken_emojis: Optional[bool] = Field(default=UNSET, alias="enableSpokenEmojis")
    """The spoken emoji behavior for the call If not set, uses default behavior based on model of choice If 'true', adds
    spoken emoji formatting for the request. This will replace spoken emojis with the corresponding Unicode symbols in
    the final transcript. If 'false', spoken emojis are not replaced."""

    model: Optional[str] = UNSET
    """Which model to select for the given request. Select the model best suited to your domain to get best results. If
    a model is not explicitly specified, then we auto-select a model based on the parameters in the RecognitionConfig.
    *Model* *Description* latest_long Best for long form content like media or conversation. latest_short Best for short
    form content like commands or single shot directed speech. command_and_search Best for short queries such as voice
    commands or voice search. phone_call Best for audio that originated from a phone call (typically recorded at an 8khz
    sampling rate). video Best for audio that originated from video or includes multiple speakers. Ideally the audio is
    recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate.
    default Best for audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio
    is high-fidelity, recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that originated
    from a conversation between a medical provider and patient. medical_dictation Best for audio that originated from
    dictation notes by a medical provider."""

    audio_channel_count: Optional[int] = Field(default=UNSET, alias="audioChannelCount")
    """The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition. Valid values for
    LINEAR16, OGG_OPUS and FLAC are ``1``-``8``. Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only
    ``1``. If ``0`` or omitted, defaults to one channel (mono). Note: We only recognize the first channel by default. To
    perform independent recognition on each channel set ``enable_separate_recognition_per_channel`` to 'true'."""

    enable_word_time_offsets: Optional[bool] = Field(default=UNSET, alias="enableWordTimeOffsets")
    """If ``true``, the top result includes a list of words and the start and end time offsets (timestamps) for those
    words. If ``false``, no word-level time offset information is returned. The default is ``false``."""

    diarization_config: Optional[SpeakerDiarizationConfig2] = Field(default=UNSET, alias="diarizationConfig")
    """Config to enable speaker diarization and set additional parameters to make diarization better suited for your
    application. Note: When this is enabled, we send all the words from the beginning of the audio for the top
    alternative in every consecutive STREAMING responses. This is done in order to improve our speaker tags as our
    models learn to identify the speakers in the conversation over time. For non-streaming requests, the diarization
    results will be provided only in the top alternative of the FINAL SpeechRecognitionResult."""

    sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="sampleRateHertz")
    """Sample rate in Hertz of the audio data sent in all ``RecognitionAudio`` messages. Valid values are: 8000-48000.
    16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that's not possible,
    use the native sample rate of the audio source (instead of re-sampling). This field is optional for FLAC and WAV
    audio files, but is required for all other audio formats. For details, see AudioEncoding."""


class RecognitionConfig2Dict(TypedDict):
    enable_word_confidence: NotRequired[bool]
    enable_automatic_punctuation: NotRequired[bool]
    use_enhanced: NotRequired[bool]
    adaptation: NotRequired[SpeechAdaptation2Dict]
    enable_separate_recognition_per_channel: NotRequired[bool]
    metadata: NotRequired[RecognitionMetadata2Dict]
    enable_spoken_punctuation: NotRequired[bool]
    alternative_language_codes: NotRequired[list[str]]
    max_alternatives: NotRequired[int]
    profanity_filter: NotRequired[bool]
    language_code: NotRequired[str]
    encoding: NotRequired[EncodingOrStr]
    transcript_normalization: NotRequired[TranscriptNormalization2Dict]
    speech_contexts: NotRequired[list[SpeechContextDict]]
    enable_spoken_emojis: NotRequired[bool]
    model: NotRequired[str]
    audio_channel_count: NotRequired[int]
    enable_word_time_offsets: NotRequired[bool]
    diarization_config: NotRequired[SpeakerDiarizationConfig2Dict]
    sample_rate_hertz: NotRequired[int]
