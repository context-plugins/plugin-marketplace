from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CostEstimationTimeRange(SdkBaseModel):
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The start time of the cost estimation."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The end time of the cost estimation."""


class CostEstimationTimeRangeDict(TypedDict):
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
