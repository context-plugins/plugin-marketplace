from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel
from .enums.interval import IntervalOrStr


class CloudDiagramCostTimeRange(SdkBaseModel):
    """Resolved cost window for the snapshot."""

    start_date: Date = Field(alias="startDate")
    """Inclusive start of the cost window (ISO date)."""

    end_date: Date = Field(alias="endDate")
    """Inclusive end of the cost window (ISO date)."""

    interval: IntervalOrStr
    """Bucket interval used for the trend series."""


class CloudDiagramCostTimeRangeDict(TypedDict):
    start_date: Date
    end_date: Date
    interval: IntervalOrStr
