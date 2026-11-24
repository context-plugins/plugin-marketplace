from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .timestamp_range import TimestampRange, TimestampRangeDict


class PointsOfInterest(SdkBaseModel):
    timestamp_ranges: Optional[list[TimestampRange]] = Field(default=UNSET, alias="TimestampRanges")
    """Contains the timestamp ranges (start time through end time) of matched categories and rules."""


class PointsOfInterestDict(TypedDict):
    timestamp_ranges: NotRequired[list[TimestampRangeDict]]
