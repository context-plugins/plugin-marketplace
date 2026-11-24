from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotLocaleRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the locale."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the locale."""

    locale_id: str = Field(alias="localeId")
    """The unique identifier of the locale to describe. The string must match one of the supported locales. For more
    information, see Supported languages."""


class DescribeBotLocaleRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
