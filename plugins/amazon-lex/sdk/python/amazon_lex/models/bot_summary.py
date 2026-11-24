from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_status import BotStatusOrStr
from .enums.bot_type import BotTypeOrStr


class BotSummary(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier assigned to the bot. Use this ID to get detailed information about the bot with the
    DescribeBot operation."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the bot."""

    description: Optional[str] = UNSET
    """The description of the bot."""

    bot_status: Optional[BotStatusOrStr] = Field(default=UNSET, alias="botStatus")
    """The current status of the bot. When the status is Available the bot is ready for use."""

    latest_bot_version: Optional[str] = Field(default=UNSET, alias="latestBotVersion")
    """The latest numerical version in use for the bot."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the bot was last updated."""

    bot_type: Optional[BotTypeOrStr] = Field(default=UNSET, alias="botType")
    """The type of the bot."""


class BotSummaryDict(TypedDict):
    bot_id: NotRequired[str]
    bot_name: NotRequired[str]
    description: NotRequired[str]
    bot_status: NotRequired[BotStatusOrStr]
    latest_bot_version: NotRequired[str]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    bot_type: NotRequired[BotTypeOrStr]
