from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_alias_locale_settings import BotAliasLocaleSettings, BotAliasLocaleSettingsDict
from .conversation_log_settings import ConversationLogSettings, ConversationLogSettingsDict
from .enums.bot_alias_status1 import BotAliasStatus1OrStr
from .sentiment_analysis_settings import SentimentAnalysisSettings, SentimentAnalysisSettingsDict


class CreateBotAliasResponse(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The unique identifier of the bot alias."""

    bot_alias_name: Optional[str] = Field(default=UNSET, alias="botAliasName")
    """The name specified for the bot alias."""

    description: Optional[str] = UNSET
    """The description specified for the bot alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot associated with this alias."""

    bot_alias_locale_settings: Optional[dict[str, BotAliasLocaleSettings]] = Field(
        default=UNSET, alias="botAliasLocaleSettings"
    )
    """Configuration information for a specific locale."""

    conversation_log_settings: Optional[ConversationLogSettings] = Field(default=UNSET, alias="conversationLogSettings")
    sentiment_analysis_settings: Optional[SentimentAnalysisSettings] = Field(
        default=UNSET, alias="sentimentAnalysisSettings"
    )
    bot_alias_status: Optional[BotAliasStatus1OrStr] = Field(default=UNSET, alias="botAliasStatus")
    """The current status of the alias. The alias is first put into the Creating state. When the alias is ready to be
    used, it is put into the Available state. You can use the DescribeBotAlias operation to get the current state of an
    alias."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that this alias applies to."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A Unix timestamp indicating the date and time that the bot alias was created."""

    tags: Optional[dict[str, str]] = UNSET
    """A list of tags associated with the bot alias."""


class CreateBotAliasResponseDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_alias_name: NotRequired[str]
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_alias_locale_settings: NotRequired[dict[str, BotAliasLocaleSettingsDict]]
    conversation_log_settings: NotRequired[ConversationLogSettingsDict]
    sentiment_analysis_settings: NotRequired[SentimentAnalysisSettingsDict]
    bot_alias_status: NotRequired[BotAliasStatus1OrStr]
    bot_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    tags: NotRequired[dict[str, str]]
