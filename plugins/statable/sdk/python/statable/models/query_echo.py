from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.dimension import DimensionOrStr
from .enums.metric import MetricOrStr
from .filter import Filter, FilterDict


class QueryEcho(SdkBaseModel):
    """Echo of the resolved request."""

    site_id: Optional[int] = UNSET
    metrics: Optional[list[MetricOrStr]] = UNSET
    date_range: Optional[list[Date]] = UNSET
    """Always the resolved concrete [from, to] YYYY-MM-DD window (presets normalized)."""

    compare_date_range: Optional[list[Date]] = UNSET
    """Present only when ``compare`` was set — the resolved [from, to] of the compare window."""

    dimensions: Optional[list[DimensionOrStr]] = UNSET
    filters: Optional[list[Filter]] = UNSET


class QueryEchoDict(TypedDict):
    site_id: NotRequired[int]
    metrics: NotRequired[list[MetricOrStr]]
    date_range: NotRequired[list[Date]]
    compare_date_range: NotRequired[list[Date]]
    dimensions: NotRequired[list[DimensionOrStr]]
    filters: NotRequired[list[FilterDict]]
