from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_status1 import BotStatus1OrStr


class BotVersionSummary(SdkBaseModel):
    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot associated with the version."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The numeric version of the bot, or DRAFT to indicate that this is the version of the bot that can be updated.."""

    description: Optional[str] = UNSET
    """The description of the version."""

    bot_status: Optional[BotStatus1OrStr] = Field(default=UNSET, alias="botStatus")
    """The status of the bot. When the status is available, the version of the bot is ready for use."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the version was created."""


class BotVersionSummaryDict(TypedDict):
    bot_name: NotRequired[str]
    bot_version: NotRequired[str]
    description: NotRequired[str]
    bot_status: NotRequired[BotStatus1OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
