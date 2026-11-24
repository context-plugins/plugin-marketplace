from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AnomalyReportedTimeRange(SdkBaseModel):
    open_time: RFC3339DateTime = Field(alias="OpenTime")
    """The time when an anomaly is opened."""

    close_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CloseTime")
    """The time when an anomaly is closed."""


class AnomalyReportedTimeRangeDict(TypedDict):
    open_time: RFC3339DateTime
    close_time: NotRequired[RFC3339DateTime]
