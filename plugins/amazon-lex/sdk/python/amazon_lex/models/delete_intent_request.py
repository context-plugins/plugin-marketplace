from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteIntentRequest(SdkBaseModel):
    intent_id: str = Field(alias="intentId")
    """The unique identifier of the intent to delete."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the intent."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the intent."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale where the bot will be deleted. The string must match one of the
    supported locales. For more information, see Supported languages."""


class DeleteIntentRequestDict(TypedDict):
    intent_id: str
    bot_id: str
    bot_version: str
    locale_id: str
