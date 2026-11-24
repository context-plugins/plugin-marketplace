from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signal_api_dto import SignalApiDto, SignalApiDtoDict


class MonitorResult(SdkBaseModel):
    """Single monitor response."""

    data: SignalApiDto
    """Monitor payload."""


class MonitorResultDict(TypedDict):
    data: SignalApiDtoDict
