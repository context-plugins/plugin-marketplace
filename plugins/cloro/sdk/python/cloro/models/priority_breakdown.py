from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PriorityBreakdown(SdkBaseModel):
    priority: int
    """The priority level (1-10)."""

    count: int
    """Number of queued tasks at this priority level."""


class PriorityBreakdownDict(TypedDict):
    priority: int
    count: int
