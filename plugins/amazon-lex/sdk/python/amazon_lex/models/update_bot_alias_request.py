from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_alias_locale_settings import BotAliasLocaleSettings, BotAliasLocaleSettingsDict
from .conversation_log_settings import ConversationLogSettings, ConversationLogSettingsDict
from .sentiment_analysis_settings import SentimentAnalysisSettings, SentimentAnalysisSettingsDict


class UpdateBotAliasRequest(SdkBaseModel):
    bot_alias_id: str = Field(alias="botAliasId")
    """The unique identifier of the bot alias."""

    bot_alias_name: str = Field(alias="botAliasName")
    """The new name to assign to the bot alias."""

    description: Optional[str] = UNSET
    """The new description to assign to the bot alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The new bot version to assign to the bot alias."""

    bot_alias_locale_settings: Optional[dict[str, BotAliasLocaleSettings]] = Field(
        default=UNSET, alias="botAliasLocaleSettings"
    )
    """The new Lambda functions to use in each locale for the bot alias."""

    conversation_log_settings: Optional[ConversationLogSettings] = Field(default=UNSET, alias="conversationLogSettings")
    sentiment_analysis_settings: Optional[SentimentAnalysisSettings] = Field(
        default=UNSET, alias="sentimentAnalysisSettings"
    )
    bot_id: str = Field(alias="botId")
    """The identifier of the bot with the updated alias."""


class UpdateBotAliasRequestDict(TypedDict):
    bot_alias_id: str
    bot_alias_name: str
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_alias_locale_settings: NotRequired[dict[str, BotAliasLocaleSettingsDict]]
    conversation_log_settings: NotRequired[ConversationLogSettingsDict]
    sentiment_analysis_settings: NotRequired[SentimentAnalysisSettingsDict]
    bot_id: str
