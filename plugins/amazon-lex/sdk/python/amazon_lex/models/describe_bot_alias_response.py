from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_alias_history_event import BotAliasHistoryEvent, BotAliasHistoryEventDict
from .bot_alias_locale_settings import BotAliasLocaleSettings, BotAliasLocaleSettingsDict
from .conversation_log_settings import ConversationLogSettings, ConversationLogSettingsDict
from .enums.bot_alias_status3 import BotAliasStatus3OrStr
from .parent_bot_network import ParentBotNetwork, ParentBotNetworkDict
from .sentiment_analysis_settings import SentimentAnalysisSettings, SentimentAnalysisSettingsDict


class DescribeBotAliasResponse(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The identifier of the bot alias."""

    bot_alias_name: Optional[str] = Field(default=UNSET, alias="botAliasName")
    """The name of the bot alias."""

    description: Optional[str] = UNSET
    """The description of the bot alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot associated with the bot alias."""

    bot_alias_locale_settings: Optional[dict[str, BotAliasLocaleSettings]] = Field(
        default=UNSET, alias="botAliasLocaleSettings"
    )
    """The locale settings that are unique to the alias."""

    conversation_log_settings: Optional[ConversationLogSettings] = Field(default=UNSET, alias="conversationLogSettings")
    sentiment_analysis_settings: Optional[SentimentAnalysisSettings] = Field(
        default=UNSET, alias="sentimentAnalysisSettings"
    )
    bot_alias_history_events: Optional[list[BotAliasHistoryEvent]] = Field(default=UNSET, alias="botAliasHistoryEvents")
    """A list of events that affect a bot alias. For example, an event is recorded when the version that the alias
    points to changes."""

    bot_alias_status: Optional[BotAliasStatus3OrStr] = Field(default=UNSET, alias="botAliasStatus")
    """The current status of the alias. When the alias is Available, the alias is ready for use with your bot."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot associated with the bot alias."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the alias was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the alias was last updated."""

    parent_bot_networks: Optional[list[ParentBotNetwork]] = Field(default=UNSET, alias="parentBotNetworks")
    """A list of the networks to which the bot alias you described belongs."""


class DescribeBotAliasResponseDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_alias_name: NotRequired[str]
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_alias_locale_settings: NotRequired[dict[str, BotAliasLocaleSettingsDict]]
    conversation_log_settings: NotRequired[ConversationLogSettingsDict]
    sentiment_analysis_settings: NotRequired[SentimentAnalysisSettingsDict]
    bot_alias_history_events: NotRequired[list[BotAliasHistoryEventDict]]
    bot_alias_status: NotRequired[BotAliasStatus3OrStr]
    bot_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    parent_bot_networks: NotRequired[list[ParentBotNetworkDict]]
