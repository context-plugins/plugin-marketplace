from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_status5 import BotStatus5OrStr


class DeleteBotVersionResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that is being deleted."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that is being deleted."""

    bot_status: Optional[BotStatus5OrStr] = Field(default=UNSET, alias="botStatus")
    """The current status of the bot."""


class DeleteBotVersionResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    bot_status: NotRequired[BotStatus5OrStr]
