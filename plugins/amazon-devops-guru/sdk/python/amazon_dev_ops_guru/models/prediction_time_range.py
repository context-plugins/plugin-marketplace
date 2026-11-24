from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PredictionTimeRange(SdkBaseModel):
    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The time range during which a metric limit is expected to be exceeded. This applies to proactive insights
    only."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time when the behavior in a proactive insight is expected to end."""


class PredictionTimeRangeDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: NotRequired[RFC3339DateTime]
