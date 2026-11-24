from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorStatistics(SdkBaseModel):
    throttle_count: Optional[int] = Field(default=UNSET, alias="ThrottleCount")
    """The number of requests that failed with a 429 throttling status code."""

    other_count: Optional[int] = Field(default=UNSET, alias="OtherCount")
    """The number of requests that failed with untracked 4xx Client Error status codes."""

    total_count: Optional[int] = Field(default=UNSET, alias="TotalCount")
    """The total number of requests that failed with a 4xx Client Error status code."""


class ErrorStatisticsDict(TypedDict):
    throttle_count: NotRequired[int]
    other_count: NotRequired[int]
    total_count: NotRequired[int]
