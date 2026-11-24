from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_setting import EncryptionSetting, EncryptionSettingDict
from .transcript_source_setting import TranscriptSourceSetting, TranscriptSourceSettingDict


class StartBotRecommendationRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot containing the bot recommendation."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot containing the bot recommendation."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the bot recommendation to start. The string must match one of the
    supported locales. For more information, see Supported languages"""

    transcript_source_setting: TranscriptSourceSetting = Field(alias="transcriptSourceSetting")
    encryption_setting: Optional[EncryptionSetting] = Field(default=UNSET, alias="encryptionSetting")


class StartBotRecommendationRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    transcript_source_setting: TranscriptSourceSettingDict
    encryption_setting: NotRequired[EncryptionSettingDict]
