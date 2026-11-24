from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexDeleteBotAliasRequest(SdkBaseModel):
    name: str
    """The name of the alias to delete. The name is case sensitive."""

    bot_name: str = Field(alias="botName")
    """The name of the bot that the alias points to."""


class ModelsLexDeleteBotAliasRequestDict(TypedDict):
    name: str
    bot_name: str
