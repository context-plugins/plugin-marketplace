from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AnomalyTimeRange(SdkBaseModel):
    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The time when the anomalous behavior started."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time when the anomalous behavior ended."""


class AnomalyTimeRangeDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: NotRequired[RFC3339DateTime]
