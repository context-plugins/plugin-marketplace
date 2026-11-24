from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetBotChannelAssociationRequest(SdkBaseModel):
    name: str
    """The name of the association between the bot and the channel. The name is case sensitive."""

    bot_name: str = Field(alias="botName")
    """The name of the Amazon Lex bot."""

    bot_alias: str = Field(alias="botAlias")
    """An alias pointing to the specific version of the Amazon Lex bot to which this association is being made."""


class GetBotChannelAssociationRequestDict(TypedDict):
    name: str
    bot_name: str
    bot_alias: str
