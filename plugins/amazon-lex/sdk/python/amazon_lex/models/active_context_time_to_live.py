from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActiveContextTimeToLive(SdkBaseModel):
    time_to_live_in_seconds: int = Field(alias="timeToLiveInSeconds")
    """The number of seconds that the context is active. You can specify between 5 and 86400 seconds (24 hours)."""

    turns_to_live: int = Field(alias="turnsToLive")
    """The number of turns that the context is active. You can specify up to 20 turns. Each request and response from
    the bot is a turn."""


class ActiveContextTimeToLiveDict(TypedDict):
    time_to_live_in_seconds: int
    turns_to_live: int
