from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteBotLocaleRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the locale."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the locale."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that will be deleted. The string must match one of the supported
    locales. For more information, see Supported languages."""


class DeleteBotLocaleRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
