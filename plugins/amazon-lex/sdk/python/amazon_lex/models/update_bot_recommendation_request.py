from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .encryption_setting import EncryptionSetting, EncryptionSettingDict


class UpdateBotRecommendationRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot containing the bot recommendation to be updated."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot containing the bot recommendation to be updated."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the bot recommendation to update. The string must match one of the
    supported locales. For more information, see Supported languages"""

    bot_recommendation_id: str = Field(alias="botRecommendationId")
    """The unique identifier of the bot recommendation to be updated."""

    encryption_setting: EncryptionSetting = Field(alias="encryptionSetting")


class UpdateBotRecommendationRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    bot_recommendation_id: str
    encryption_setting: EncryptionSettingDict
