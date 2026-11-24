from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ForecastStatistics(SdkBaseModel):
    fault_count_high: Optional[int] = Field(default=UNSET, alias="FaultCountHigh")
    """The upper limit of fault counts for a service."""

    fault_count_low: Optional[int] = Field(default=UNSET, alias="FaultCountLow")
    """The lower limit of fault counts for a service."""


class ForecastStatisticsDict(TypedDict):
    fault_count_high: NotRequired[int]
    fault_count_low: NotRequired[int]
