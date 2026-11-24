from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Interval2(SdkBaseModel):
    """Optional. Time interval in which diagnosis should be carried out on the cluster."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before
    the end."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the
    same or after the start."""


class Interval2Dict(TypedDict):
    end_time: NotRequired[str]
    start_time: NotRequired[str]
