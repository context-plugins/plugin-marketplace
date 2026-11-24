from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class StartTimeRange(SdkBaseModel):
    from_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="FromTime")
    """The start time of the time range."""

    to_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ToTime")
    """The end time of the time range."""


class StartTimeRangeDict(TypedDict):
    from_time: NotRequired[RFC3339DateTime]
    to_time: NotRequired[RFC3339DateTime]
