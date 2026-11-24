from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .audio_filler_settings import AudioFillerSettings, AudioFillerSettingsDict
from .enums.bot_locale_status5 import BotLocaleStatus5OrStr
from .enums.speech_detection_sensitivity4 import SpeechDetectionSensitivity4OrStr
from .generative_ai_settings import GenerativeAiSettings, GenerativeAiSettingsDict
from .speaker_diarization_settings import SpeakerDiarizationSettings, SpeakerDiarizationSettingsDict
from .speech_recognition_settings import SpeechRecognitionSettings, SpeechRecognitionSettingsDict
from .unified_speech_settings import UnifiedSpeechSettings, UnifiedSpeechSettingsDict
from .voice_settings import VoiceSettings, VoiceSettingsDict


class UpdateBotLocaleResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the updated locale."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the updated locale."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the updated bot locale."""

    locale_name: Optional[str] = Field(default=UNSET, alias="localeName")
    """The updated locale name for the locale."""

    description: Optional[str] = UNSET
    """The updated description of the locale."""

    nlu_intent_confidence_threshold: Optional[float] = Field(default=UNSET, alias="nluIntentConfidenceThreshold")
    """The updated confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents in
    the list of possible intents for an utterance."""

    voice_settings: Optional[VoiceSettings] = Field(default=UNSET, alias="voiceSettings")
    unified_speech_settings: Optional[UnifiedSpeechSettings] = Field(default=UNSET, alias="unifiedSpeechSettings")
    audio_filler_settings: Optional[AudioFillerSettings] = Field(default=UNSET, alias="audioFillerSettings")
    speech_recognition_settings: Optional[SpeechRecognitionSettings] = Field(
        default=UNSET, alias="speechRecognitionSettings"
    )
    bot_locale_status: Optional[BotLocaleStatus5OrStr] = Field(default=UNSET, alias="botLocaleStatus")
    """The current status of the locale. When the bot status is Built the locale is ready for use."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """If the botLocaleStatus is Failed, the failureReasons field lists the errors that occurred while building the
    bot."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the locale was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the locale was last updated."""

    recommended_actions: Optional[list[str]] = Field(default=UNSET, alias="recommendedActions")
    """Recommended actions to take to resolve an error in the failureReasons field."""

    generative_ai_settings: Optional[GenerativeAiSettings] = Field(default=UNSET, alias="generativeAISettings")
    speech_detection_sensitivity: Optional[SpeechDetectionSensitivity4OrStr] = Field(
        default=UNSET, alias="speechDetectionSensitivity"
    )
    """The updated sensitivity level for voice activity detection (VAD) in the bot locale."""

    speaker_diarization_settings: Optional[SpeakerDiarizationSettings] = Field(
        default=UNSET, alias="speakerDiarizationSettings"
    )


class UpdateBotLocaleResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    locale_name: NotRequired[str]
    description: NotRequired[str]
    nlu_intent_confidence_threshold: NotRequired[float]
    voice_settings: NotRequired[VoiceSettingsDict]
    unified_speech_settings: NotRequired[UnifiedSpeechSettingsDict]
    audio_filler_settings: NotRequired[AudioFillerSettingsDict]
    speech_recognition_settings: NotRequired[SpeechRecognitionSettingsDict]
    bot_locale_status: NotRequired[BotLocaleStatus5OrStr]
    failure_reasons: NotRequired[list[str]]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    recommended_actions: NotRequired[list[str]]
    generative_ai_settings: NotRequired[GenerativeAiSettingsDict]
    speech_detection_sensitivity: NotRequired[SpeechDetectionSensitivity4OrStr]
    speaker_diarization_settings: NotRequired[SpeakerDiarizationSettingsDict]
