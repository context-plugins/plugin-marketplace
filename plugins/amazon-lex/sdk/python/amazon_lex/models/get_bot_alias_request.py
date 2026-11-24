from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetBotAliasRequest(SdkBaseModel):
    name: str
    """The name of the bot alias. The name is case sensitive."""

    bot_name: str = Field(alias="botName")
    """The name of the bot."""


class GetBotAliasRequestDict(TypedDict):
    name: str
    bot_name: str
