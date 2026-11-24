from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.event import Event, EventDict


class TraceEventsResponse(SdkBaseModel):
    events: list[Event]
    latest_seq: int
    next_seq: int
    has_more: bool
    status: str
    reward: Optional[float] = UNSET


class TraceEventsResponseDict(TypedDict):
    events: list[EventDict]
    latest_seq: int
    next_seq: int
    has_more: bool
    status: str
    reward: NotRequired[float]
