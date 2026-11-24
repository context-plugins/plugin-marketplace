from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_filler_settings import AudioFillerSettings, AudioFillerSettingsDict
from .enums.speech_detection_sensitivity import SpeechDetectionSensitivityOrStr
from .generative_ai_settings import GenerativeAiSettings, GenerativeAiSettingsDict
from .speaker_diarization_settings import SpeakerDiarizationSettings, SpeakerDiarizationSettingsDict
from .speech_recognition_settings import SpeechRecognitionSettings, SpeechRecognitionSettingsDict
from .unified_speech_settings import UnifiedSpeechSettings, UnifiedSpeechSettingsDict
from .voice_settings import VoiceSettings, VoiceSettingsDict


class CreateBotLocaleRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to create the locale for."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to create the locale for. This can only be the draft version of the bot."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that the bot will be used in. The string must match one of the
    supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more
    information, see Supported languages."""

    description: Optional[str] = UNSET
    """A description of the bot locale. Use this to help identify the bot locale in lists."""

    nlu_intent_confidence_threshold: float = Field(alias="nluIntentConfidenceThreshold")
    """Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or
    both when returning alternative intents. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if
    they are configured for the bot. For example, suppose a bot is configured with the confidence threshold of 0.80 and
    the AMAZON.FallbackIntent. Amazon Lex returns three alternative intents with the following confidence scores:
    IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the RecognizeText operation would be:
    AMAZON.FallbackIntent IntentA IntentB IntentC"""

    voice_settings: Optional[VoiceSettings] = Field(default=UNSET, alias="voiceSettings")
    unified_speech_settings: Optional[UnifiedSpeechSettings] = Field(default=UNSET, alias="unifiedSpeechSettings")
    audio_filler_settings: Optional[AudioFillerSettings] = Field(default=UNSET, alias="audioFillerSettings")
    speech_recognition_settings: Optional[SpeechRecognitionSettings] = Field(
        default=UNSET, alias="speechRecognitionSettings"
    )
    generative_ai_settings: Optional[GenerativeAiSettings] = Field(default=UNSET, alias="generativeAISettings")
    speech_detection_sensitivity: Optional[SpeechDetectionSensitivityOrStr] = Field(
        default=UNSET, alias="speechDetectionSensitivity"
    )
    """The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize speech
    recognition accuracy by adjusting how the system responds to background noise during voice interactions."""

    speaker_diarization_settings: Optional[SpeakerDiarizationSettings] = Field(
        default=UNSET, alias="speakerDiarizationSettings"
    )


class CreateBotLocaleRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    description: NotRequired[str]
    nlu_intent_confidence_threshold: float
    voice_settings: NotRequired[VoiceSettingsDict]
    unified_speech_settings: NotRequired[UnifiedSpeechSettingsDict]
    audio_filler_settings: NotRequired[AudioFillerSettingsDict]
    speech_recognition_settings: NotRequired[SpeechRecognitionSettingsDict]
    generative_ai_settings: NotRequired[GenerativeAiSettingsDict]
    speech_detection_sensitivity: NotRequired[SpeechDetectionSensitivityOrStr]
    speaker_diarization_settings: NotRequired[SpeakerDiarizationSettingsDict]
