from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .audio_filler_settings import AudioFillerSettings, AudioFillerSettingsDict
from .enums.bot_locale_status2 import BotLocaleStatus2OrStr
from .enums.speech_detection_sensitivity1 import SpeechDetectionSensitivity1OrStr
from .generative_ai_settings import GenerativeAiSettings, GenerativeAiSettingsDict
from .speaker_diarization_settings import SpeakerDiarizationSettings, SpeakerDiarizationSettingsDict
from .speech_recognition_settings import SpeechRecognitionSettings, SpeechRecognitionSettingsDict
from .unified_speech_settings import UnifiedSpeechSettings, UnifiedSpeechSettingsDict
from .voice_settings import VoiceSettings, VoiceSettingsDict


class CreateBotLocaleResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The specified bot identifier."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The specified bot version."""

    locale_name: Optional[str] = Field(default=UNSET, alias="localeName")
    """The specified locale name."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The specified locale identifier."""

    description: Optional[str] = UNSET
    """The specified description of the bot locale."""

    nlu_intent_confidence_threshold: Optional[float] = Field(default=UNSET, alias="nluIntentConfidenceThreshold")
    """The specified confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent
    intents."""

    voice_settings: Optional[VoiceSettings] = Field(default=UNSET, alias="voiceSettings")
    unified_speech_settings: Optional[UnifiedSpeechSettings] = Field(default=UNSET, alias="unifiedSpeechSettings")
    audio_filler_settings: Optional[AudioFillerSettings] = Field(default=UNSET, alias="audioFillerSettings")
    speech_recognition_settings: Optional[SpeechRecognitionSettings] = Field(
        default=UNSET, alias="speechRecognitionSettings"
    )
    bot_locale_status: Optional[BotLocaleStatus2OrStr] = Field(default=UNSET, alias="botLocaleStatus")
    """The status of the bot. When the status is Creating the bot locale is being configured. When the status is
    Building Amazon Lex is building the bot for testing and use. If the status of the bot is ReadyExpressTesting, you
    can test the bot using the exact utterances specified in the bots' intents. When the bot is ready for full testing
    or to run, the status is Built. If there was a problem with building the bot, the status is Failed. If the bot was
    saved but not built, the status is NotBuilt."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp specifying the date and time that the bot locale was created."""

    generative_ai_settings: Optional[GenerativeAiSettings] = Field(default=UNSET, alias="generativeAISettings")
    speech_detection_sensitivity: Optional[SpeechDetectionSensitivity1OrStr] = Field(
        default=UNSET, alias="speechDetectionSensitivity"
    )
    """The sensitivity level for voice activity detection (VAD) that was specified for the bot locale."""

    speaker_diarization_settings: Optional[SpeakerDiarizationSettings] = Field(
        default=UNSET, alias="speakerDiarizationSettings"
    )


class CreateBotLocaleResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_name: NotRequired[str]
    locale_id: NotRequired[str]
    description: NotRequired[str]
    nlu_intent_confidence_threshold: NotRequired[float]
    voice_settings: NotRequired[VoiceSettingsDict]
    unified_speech_settings: NotRequired[UnifiedSpeechSettingsDict]
    audio_filler_settings: NotRequired[AudioFillerSettingsDict]
    speech_recognition_settings: NotRequired[SpeechRecognitionSettingsDict]
    bot_locale_status: NotRequired[BotLocaleStatus2OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
    generative_ai_settings: NotRequired[GenerativeAiSettingsDict]
    speech_detection_sensitivity: NotRequired[SpeechDetectionSensitivity1OrStr]
    speaker_diarization_settings: NotRequired[SpeakerDiarizationSettingsDict]
