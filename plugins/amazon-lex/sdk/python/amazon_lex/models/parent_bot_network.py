from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ParentBotNetwork(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the network of bots assigned by Amazon Lex."""

    bot_version: str = Field(alias="botVersion")
    """The version of the network of bots."""


class ParentBotNetworkDict(TypedDict):
    bot_id: str
    bot_version: str
