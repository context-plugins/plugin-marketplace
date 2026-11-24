from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class EligibleSpendDataPoint(SdkBaseModel):
    """One time-bucketed eligible-spend usage point for the recommendation chart. Units are shelf-price hourly dollars
    ($/h) unless noted by the client visualization."""

    usage_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="usageTime")
    """Start of the time bucket for this data point (UTC)."""

    total_usage: Optional[float] = Field(default=UNSET, alias="totalUsage")
    """Total eligible usage in the bucket when granularity is ``hour``. Prefer min/max/median for coarser
    granularities."""

    min_usage: Optional[float] = Field(default=UNSET, alias="minUsage")
    """Minimum eligible usage ($/h) observed in the bucket (day/week/month views)."""

    max_usage: Optional[float] = Field(default=UNSET, alias="maxUsage")
    """Maximum eligible usage ($/h) observed in the bucket (day/week/month views)."""

    median_usage: Optional[float] = Field(default=UNSET, alias="medianUsage")
    """Median eligible usage ($/h) observed in the bucket (day/week/month views)."""


class EligibleSpendDataPointDict(TypedDict):
    usage_time: NotRequired[RFC3339DateTime | None]
    total_usage: NotRequired[float]
    min_usage: NotRequired[float]
    max_usage: NotRequired[float]
    median_usage: NotRequired[float]
