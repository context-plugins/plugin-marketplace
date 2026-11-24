from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GenerateBotElementRequest(SdkBaseModel):
    intent_id: str = Field(alias="intentId")
    """The intent unique Id for the bot request to generate utterances."""

    bot_id: str = Field(alias="botId")
    """The bot unique Id for the bot request to generate utterances."""

    bot_version: str = Field(alias="botVersion")
    """The bot version for the bot request to generate utterances."""

    locale_id: str = Field(alias="localeId")
    """The unique locale Id for the bot request to generate utterances."""


class GenerateBotElementRequestDict(TypedDict):
    intent_id: str
    bot_id: str
    bot_version: str
    locale_id: str
