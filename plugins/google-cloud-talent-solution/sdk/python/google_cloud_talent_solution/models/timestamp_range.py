from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TimestampRange(SdkBaseModel):
    """Message representing a period of time between two timestamps."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Begin of the period (inclusive)."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """End of the period (exclusive)."""


class TimestampRangeDict(TypedDict):
    start_time: NotRequired[str]
    end_time: NotRequired[str]
