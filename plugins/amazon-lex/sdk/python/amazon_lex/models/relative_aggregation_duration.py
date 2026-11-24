from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.time_dimension import TimeDimensionOrStr


class RelativeAggregationDuration(SdkBaseModel):
    time_dimension: TimeDimensionOrStr = Field(alias="timeDimension")
    """The type of time period that the timeValue field represents."""

    time_value: int = Field(alias="timeValue")
    """The period of the time window to gather statistics for. The valid value depends on the setting of the
    timeDimension field. Hours - 1/3/6/12/24 Days - 3 Weeks - 1/2"""


class RelativeAggregationDurationDict(TypedDict):
    time_dimension: TimeDimensionOrStr
    time_value: int
