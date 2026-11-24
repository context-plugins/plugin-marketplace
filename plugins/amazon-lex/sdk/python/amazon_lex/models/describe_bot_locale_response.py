from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .audio_filler_settings import AudioFillerSettings, AudioFillerSettingsDict
from .bot_locale_history_event import BotLocaleHistoryEvent, BotLocaleHistoryEventDict
from .enums.bot_locale_status4 import BotLocaleStatus4OrStr
from .enums.speech_detection_sensitivity2 import SpeechDetectionSensitivity2OrStr
from .generative_ai_settings import GenerativeAiSettings, GenerativeAiSettingsDict
from .speaker_diarization_settings import SpeakerDiarizationSettings, SpeakerDiarizationSettingsDict
from .speech_recognition_settings import SpeechRecognitionSettings, SpeechRecognitionSettingsDict
from .unified_speech_settings import UnifiedSpeechSettings, UnifiedSpeechSettingsDict
from .voice_settings import VoiceSettings, VoiceSettingsDict


class DescribeBotLocaleResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot associated with the locale."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot associated with the locale."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The unique identifier of the described locale."""

    locale_name: Optional[str] = Field(default=UNSET, alias="localeName")
    """The name of the locale."""

    description: Optional[str] = UNSET
    """The description of the locale."""

    nlu_intent_confidence_threshold: Optional[float] = Field(default=UNSET, alias="nluIntentConfidenceThreshold")
    """The confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents
    in the list of possible intents for an utterance."""

    voice_settings: Optional[VoiceSettings] = Field(default=UNSET, alias="voiceSettings")
    unified_speech_settings: Optional[UnifiedSpeechSettings] = Field(default=UNSET, alias="unifiedSpeechSettings")
    audio_filler_settings: Optional[AudioFillerSettings] = Field(default=UNSET, alias="audioFillerSettings")
    speech_recognition_settings: Optional[SpeechRecognitionSettings] = Field(
        default=UNSET, alias="speechRecognitionSettings"
    )
    intents_count: Optional[int] = Field(default=UNSET, alias="intentsCount")
    """The number of intents defined for the locale."""

    slot_types_count: Optional[int] = Field(default=UNSET, alias="slotTypesCount")
    """The number of slot types defined for the locale."""

    bot_locale_status: Optional[BotLocaleStatus4OrStr] = Field(default=UNSET, alias="botLocaleStatus")
    """The status of the bot. If the status is Failed, the reasons for the failure are listed in the failureReasons
    field."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """if botLocaleStatus is Failed, Amazon Lex explains why it failed to build the bot."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the locale was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the locale was last updated."""

    last_build_submitted_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastBuildSubmittedDateTime")
    """The date and time that the locale was last submitted for building."""

    bot_locale_history_events: Optional[list[BotLocaleHistoryEvent]] = Field(
        default=UNSET, alias="botLocaleHistoryEvents"
    )
    """History of changes, such as when a locale is used in an alias, that have taken place for the locale."""

    recommended_actions: Optional[list[str]] = Field(default=UNSET, alias="recommendedActions")
    """Recommended actions to take to resolve an error in the failureReasons field."""

    generative_ai_settings: Optional[GenerativeAiSettings] = Field(default=UNSET, alias="generativeAISettings")
    speech_detection_sensitivity: Optional[SpeechDetectionSensitivity2OrStr] = Field(
        default=UNSET, alias="speechDetectionSensitivity"
    )
    """The sensitivity level for voice activity detection (VAD) configured for the bot locale."""

    speaker_diarization_settings: Optional[SpeakerDiarizationSettings] = Field(
        default=UNSET, alias="speakerDiarizationSettings"
    )


class DescribeBotLocaleResponseDict(TypedDict):
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
    intents_count: NotRequired[int]
    slot_types_count: NotRequired[int]
    bot_locale_status: NotRequired[BotLocaleStatus4OrStr]
    failure_reasons: NotRequired[list[str]]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    last_build_submitted_date_time: NotRequired[RFC3339DateTime]
    bot_locale_history_events: NotRequired[list[BotLocaleHistoryEventDict]]
    recommended_actions: NotRequired[list[str]]
    generative_ai_settings: NotRequired[GenerativeAiSettingsDict]
    speech_detection_sensitivity: NotRequired[SpeechDetectionSensitivity2OrStr]
    speaker_diarization_settings: NotRequired[SpeakerDiarizationSettingsDict]
