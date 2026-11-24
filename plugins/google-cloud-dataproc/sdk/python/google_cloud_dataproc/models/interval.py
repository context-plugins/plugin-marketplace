from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Interval(SdkBaseModel):
    """Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start
    must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When
    both start and end are unspecified, the interval matches any time."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before
    the end."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the
    same or after the start."""


class IntervalDict(TypedDict):
    end_time: NotRequired[str]
    start_time: NotRequired[str]
