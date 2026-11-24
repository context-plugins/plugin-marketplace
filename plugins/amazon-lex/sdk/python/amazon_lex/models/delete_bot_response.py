from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_status4 import BotStatus4OrStr


class DeleteBotResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that Amazon Lex is deleting."""

    bot_status: Optional[BotStatus4OrStr] = Field(default=UNSET, alias="botStatus")
    """The current status of the bot. The status is Deleting while the bot and its associated resources are being
    deleted."""


class DeleteBotResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_status: NotRequired[BotStatus4OrStr]
