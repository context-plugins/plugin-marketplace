from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_alias_locale_settings import BotAliasLocaleSettings, BotAliasLocaleSettingsDict
from .conversation_log_settings import ConversationLogSettings, ConversationLogSettingsDict
from .enums.bot_alias_status4 import BotAliasStatus4OrStr
from .sentiment_analysis_settings import SentimentAnalysisSettings, SentimentAnalysisSettingsDict


class UpdateBotAliasResponse(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The identifier of the updated bot alias."""

    bot_alias_name: Optional[str] = Field(default=UNSET, alias="botAliasName")
    """The updated name of the bot alias."""

    description: Optional[str] = UNSET
    """The updated description of the bot alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The updated version of the bot that the alias points to."""

    bot_alias_locale_settings: Optional[dict[str, BotAliasLocaleSettings]] = Field(
        default=UNSET, alias="botAliasLocaleSettings"
    )
    """The updated Lambda functions to use in each locale for the bot alias."""

    conversation_log_settings: Optional[ConversationLogSettings] = Field(default=UNSET, alias="conversationLogSettings")
    sentiment_analysis_settings: Optional[SentimentAnalysisSettings] = Field(
        default=UNSET, alias="sentimentAnalysisSettings"
    )
    bot_alias_status: Optional[BotAliasStatus4OrStr] = Field(default=UNSET, alias="botAliasStatus")
    """The current status of the bot alias. When the status is Available the alias is ready for use."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot with the updated alias."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the bot was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the bot was last updated."""


class UpdateBotAliasResponseDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_alias_name: NotRequired[str]
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_alias_locale_settings: NotRequired[dict[str, BotAliasLocaleSettingsDict]]
    conversation_log_settings: NotRequired[ConversationLogSettingsDict]
    sentiment_analysis_settings: NotRequired[SentimentAnalysisSettingsDict]
    bot_alias_status: NotRequired[BotAliasStatus4OrStr]
    bot_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
