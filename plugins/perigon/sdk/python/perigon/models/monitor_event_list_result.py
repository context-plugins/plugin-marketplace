from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signal_event_dto import SignalEventDto, SignalEventDtoDict


class MonitorEventListResult(SdkBaseModel):
    """Paginated list of monitor events."""

    total: int
    """Total number of matching events across all pages."""

    data: list[SignalEventDto]
    """Events returned for the requested page."""


class MonitorEventListResultDict(TypedDict):
    total: int
    data: list[SignalEventDtoDict]
