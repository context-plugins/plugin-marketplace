from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_locale_status1 import BotLocaleStatus1OrStr


class BuildBotLocaleResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the specified bot."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that was built. This is only the draft version of the bot."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale specified of where the bot can be used."""

    bot_locale_status: Optional[BotLocaleStatus1OrStr] = Field(default=UNSET, alias="botLocaleStatus")
    """The bot's build status. When the status is ReadyExpressTesting you can test the bot using the utterances defined
    for the intents and slot types. When the status is Built, the bot is ready for use and can be tested using any
    utterance."""

    last_build_submitted_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastBuildSubmittedDateTime")
    """A timestamp indicating the date and time that the bot was last built for this locale."""


class BuildBotLocaleResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_locale_status: NotRequired[BotLocaleStatus1OrStr]
    last_build_submitted_date_time: NotRequired[RFC3339DateTime]
