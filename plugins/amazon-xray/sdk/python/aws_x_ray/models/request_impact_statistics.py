from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestImpactStatistics(SdkBaseModel):
    fault_count: Optional[int] = Field(default=UNSET, alias="FaultCount")
    """The number of requests that have resulted in a fault,"""

    ok_count: Optional[int] = Field(default=UNSET, alias="OkCount")
    """The number of successful requests."""

    total_count: Optional[int] = Field(default=UNSET, alias="TotalCount")
    """The total number of requests to the service."""


class RequestImpactStatisticsDict(TypedDict):
    fault_count: NotRequired[int]
    ok_count: NotRequired[int]
    total_count: NotRequired[int]
