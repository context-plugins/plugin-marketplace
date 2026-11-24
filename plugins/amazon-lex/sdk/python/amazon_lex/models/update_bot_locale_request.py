from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_filler_settings import AudioFillerSettings, AudioFillerSettingsDict
from .enums.speech_detection_sensitivity3 import SpeechDetectionSensitivity3OrStr
from .generative_ai_settings import GenerativeAiSettings, GenerativeAiSettingsDict
from .speaker_diarization_settings import SpeakerDiarizationSettings, SpeakerDiarizationSettingsDict
from .speech_recognition_settings import SpeechRecognitionSettings, SpeechRecognitionSettingsDict
from .unified_speech_settings import UnifiedSpeechSettings, UnifiedSpeechSettingsDict
from .voice_settings import VoiceSettings, VoiceSettingsDict


class UpdateBotLocaleRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the locale."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the locale to be updated. The version can only be the DRAFT version."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale to update. The string must match one of the supported locales. For more
    information, see Supported languages."""

    description: Optional[str] = UNSET
    """The new description of the locale."""

    nlu_intent_confidence_threshold: float = Field(alias="nluIntentConfidenceThreshold")
    """The new confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent
    intents in the list of possible intents for an utterance."""

    voice_settings: Optional[VoiceSettings] = Field(default=UNSET, alias="voiceSettings")
    unified_speech_settings: Optional[UnifiedSpeechSettings] = Field(default=UNSET, alias="unifiedSpeechSettings")
    audio_filler_settings: Optional[AudioFillerSettings] = Field(default=UNSET, alias="audioFillerSettings")
    speech_recognition_settings: Optional[SpeechRecognitionSettings] = Field(
        default=UNSET, alias="speechRecognitionSettings"
    )
    generative_ai_settings: Optional[GenerativeAiSettings] = Field(default=UNSET, alias="generativeAISettings")
    speech_detection_sensitivity: Optional[SpeechDetectionSensitivity3OrStr] = Field(
        default=UNSET, alias="speechDetectionSensitivity"
    )
    """The new sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize
    speech recognition accuracy by adjusting how the system responds to background noise during voice interactions."""

    speaker_diarization_settings: Optional[SpeakerDiarizationSettings] = Field(
        default=UNSET, alias="speakerDiarizationSettings"
    )


class UpdateBotLocaleRequestDict(TypedDict):
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
    speech_detection_sensitivity: NotRequired[SpeechDetectionSensitivity3OrStr]
    speaker_diarization_settings: NotRequired[SpeakerDiarizationSettingsDict]
