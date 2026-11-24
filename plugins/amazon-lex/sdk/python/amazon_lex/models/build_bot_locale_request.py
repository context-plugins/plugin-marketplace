from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BuildBotLocaleRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to build. The identifier is returned in the response from the CreateBot operation."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to build. This can only be the draft version of the bot."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that the bot will be used in. The string must match one of the
    supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more
    information, see Supported languages."""


class BuildBotLocaleRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
