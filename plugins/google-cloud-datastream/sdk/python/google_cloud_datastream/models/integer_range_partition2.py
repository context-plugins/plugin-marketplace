from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IntegerRangePartition2(SdkBaseModel):
    """Integer range partitioning."""

    start: Optional[str] = UNSET
    """Required. The starting value for range partitioning (inclusive)."""

    column: Optional[str] = UNSET
    """Required. The partitioning column."""

    end: Optional[str] = UNSET
    """Required. The ending value for range partitioning (exclusive)."""

    interval: Optional[str] = UNSET
    """Required. The interval of each range within the partition."""


class IntegerRangePartition2Dict(TypedDict):
    start: NotRequired[str]
    column: NotRequired[str]
    end: NotRequired[str]
    interval: NotRequired[str]
