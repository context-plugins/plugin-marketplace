from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OutputContext(SdkBaseModel):
    name: str
    """The name of the output context."""

    time_to_live_in_seconds: int = Field(alias="timeToLiveInSeconds")
    """The amount of time, in seconds, that the output context should remain active. The time is figured from the first
    time the context is sent to the user."""

    turns_to_live: int = Field(alias="turnsToLive")
    """The number of conversation turns that the output context should remain active. The number of turns is counted
    from the first time that the context is sent to the user."""


class OutputContextDict(TypedDict):
    name: str
    time_to_live_in_seconds: int
    turns_to_live: int
