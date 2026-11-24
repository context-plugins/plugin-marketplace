from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BotAliasHistoryEvent(SdkBaseModel):
    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that was used in the event."""

    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    """The date and time that the event started."""

    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    """The date and time that the event ended."""


class BotAliasHistoryEventDict(TypedDict):
    bot_version: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
