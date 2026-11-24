from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_locale_status3 import BotLocaleStatus3OrStr


class DeleteBotLocaleResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contained the deleted locale."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contained the deleted locale."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the deleted locale."""

    bot_locale_status: Optional[BotLocaleStatus3OrStr] = Field(default=UNSET, alias="botLocaleStatus")
    """The status of deleting the bot locale. The locale first enters the Deleting status. Once the locale is deleted it
    no longer appears in the list of locales for the bot."""


class DeleteBotLocaleResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    bot_locale_status: NotRequired[BotLocaleStatus3OrStr]
