from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Schedule(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    response_delay_milliseconds: int = Field(alias="responseDelayMilliseconds")
    """Delay in ms to display the bot's message to the user. This parameter is set by the bot admin when creating the
    bot."""


class ScheduleDict(TypedDict):
    response_delay_milliseconds: int
