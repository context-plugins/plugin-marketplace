from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BotLocaleExportSpecification(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to create the locale for."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to export."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale to export. The string must match one of the locales in the bot."""


class BotLocaleExportSpecificationDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
