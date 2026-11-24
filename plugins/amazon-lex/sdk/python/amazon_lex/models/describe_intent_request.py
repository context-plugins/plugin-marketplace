from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeIntentRequest(SdkBaseModel):
    intent_id: str = Field(alias="intentId")
    """The identifier of the intent to describe."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the intent."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the intent."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the intent to describe. The string must match one of the supported
    locales. For more information, see Supported languages."""


class DescribeIntentRequestDict(TypedDict):
    intent_id: str
    bot_id: str
    bot_version: str
    locale_id: str
