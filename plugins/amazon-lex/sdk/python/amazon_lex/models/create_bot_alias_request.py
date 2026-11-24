from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_alias_locale_settings import BotAliasLocaleSettings, BotAliasLocaleSettingsDict
from .conversation_log_settings import ConversationLogSettings, ConversationLogSettingsDict
from .sentiment_analysis_settings import SentimentAnalysisSettings, SentimentAnalysisSettingsDict


class CreateBotAliasRequest(SdkBaseModel):
    bot_alias_name: str = Field(alias="botAliasName")
    """The alias to create. The name must be unique for the bot."""

    description: Optional[str] = UNSET
    """A description of the alias. Use this description to help identify the alias."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that this alias points to. You can use the UpdateBotAlias operation to change the bot
    version associated with the alias."""

    bot_alias_locale_settings: Optional[dict[str, BotAliasLocaleSettings]] = Field(
        default=UNSET, alias="botAliasLocaleSettings"
    )
    """Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda
    function to run different functions in different locales."""

    conversation_log_settings: Optional[ConversationLogSettings] = Field(default=UNSET, alias="conversationLogSettings")
    sentiment_analysis_settings: Optional[SentimentAnalysisSettings] = Field(
        default=UNSET, alias="sentimentAnalysisSettings"
    )
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that the alias applies to."""

    tags: Optional[dict[str, str]] = UNSET
    """A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the
    UpdateBotAlias operation to update the tags on a bot alias. To update tags, use the TagResource operation."""


class CreateBotAliasRequestDict(TypedDict):
    bot_alias_name: str
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_alias_locale_settings: NotRequired[dict[str, BotAliasLocaleSettingsDict]]
    conversation_log_settings: NotRequired[ConversationLogSettingsDict]
    sentiment_analysis_settings: NotRequired[SentimentAnalysisSettingsDict]
    bot_id: str
    tags: NotRequired[dict[str, str]]
