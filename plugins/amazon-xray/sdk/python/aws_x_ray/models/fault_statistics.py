from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FaultStatistics(SdkBaseModel):
    other_count: Optional[int] = Field(default=UNSET, alias="OtherCount")
    """The number of requests that failed with untracked 5xx Server Error status codes."""

    total_count: Optional[int] = Field(default=UNSET, alias="TotalCount")
    """The total number of requests that failed with a 5xx Server Error status code."""


class FaultStatisticsDict(TypedDict):
    other_count: NotRequired[int]
    total_count: NotRequired[int]
