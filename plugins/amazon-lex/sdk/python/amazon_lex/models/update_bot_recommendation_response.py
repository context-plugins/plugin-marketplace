from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_setting import EncryptionSetting, EncryptionSettingDict
from .enums.bot_recommendation_status import BotRecommendationStatusOrStr
from .transcript_source_setting import TranscriptSourceSetting, TranscriptSourceSettingDict


class UpdateBotRecommendationResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot containing the bot recommendation that has been updated."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot containing the bot recommendation that has been updated."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The identifier of the language and locale of the bot recommendation to update. The string must match one of the
    supported locales. For more information, see Supported languages"""

    bot_recommendation_status: Optional[BotRecommendationStatusOrStr] = Field(
        default=UNSET, alias="botRecommendationStatus"
    )
    """The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the
    failureReasons field."""

    bot_recommendation_id: Optional[str] = Field(default=UNSET, alias="botRecommendationId")
    """The unique identifier of the bot recommendation to be updated."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot recommendation was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot recommendation was last updated."""

    transcript_source_setting: Optional[TranscriptSourceSetting] = Field(default=UNSET, alias="transcriptSourceSetting")
    encryption_setting: Optional[EncryptionSetting] = Field(default=UNSET, alias="encryptionSetting")


class UpdateBotRecommendationResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_recommendation_status: NotRequired[BotRecommendationStatusOrStr]
    bot_recommendation_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    transcript_source_setting: NotRequired[TranscriptSourceSettingDict]
    encryption_setting: NotRequired[EncryptionSettingDict]
