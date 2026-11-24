from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleTypeInterval1(SdkBaseModel):
    """Required. Time range for score calculation. At most 14 days of scores will be returned, and both the start and
    end dates must be within the last 90 days."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before
    the end."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the
    same or after the start."""


class GoogleTypeInterval1Dict(TypedDict):
    end_time: NotRequired[str]
    start_time: NotRequired[str]
