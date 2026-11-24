from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signal_api_dto import SignalApiDto, SignalApiDtoDict


class MonitorListResult(SdkBaseModel):
    """Paginated list of monitors."""

    total: int
    """Total number of matching monitors across all pages."""

    data: list[SignalApiDto]
    """Monitors returned for the requested page."""


class MonitorListResultDict(TypedDict):
    total: int
    data: list[SignalApiDtoDict]
