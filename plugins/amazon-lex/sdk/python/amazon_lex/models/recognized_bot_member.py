from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecognizedBotMember(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot member that processes the request."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot member that processes the request."""


class RecognizedBotMemberDict(TypedDict):
    bot_id: str
    bot_name: NotRequired[str]
