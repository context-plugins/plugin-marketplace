from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class EndTimeRange(SdkBaseModel):
    from_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="FromTime")
    """The earliest end time in the time range."""

    to_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ToTime")
    """The latest end time in the time range."""


class EndTimeRangeDict(TypedDict):
    from_time: NotRequired[RFC3339DateTime]
    to_time: NotRequired[RFC3339DateTime]
