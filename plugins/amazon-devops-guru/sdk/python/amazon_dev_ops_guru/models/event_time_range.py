from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class EventTimeRange(SdkBaseModel):
    from_time: RFC3339DateTime = Field(alias="FromTime")
    """The time when the event started."""

    to_time: RFC3339DateTime = Field(alias="ToTime")
    """The time when the event ended."""


class EventTimeRangeDict(TypedDict):
    from_time: RFC3339DateTime
    to_time: RFC3339DateTime
