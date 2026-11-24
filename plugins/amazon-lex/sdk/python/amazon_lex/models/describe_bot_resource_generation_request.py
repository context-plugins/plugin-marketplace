from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotResourceGenerationRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot for which to return the generation details."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot for which to return the generation details."""

    locale_id: str = Field(alias="localeId")
    """The locale of the bot for which to return the generation details."""

    generation_id: str = Field(alias="generationId")
    """The unique identifier of the generation request for which to return the generation details."""


class DescribeBotResourceGenerationRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    locale_id: str
    generation_id: str
