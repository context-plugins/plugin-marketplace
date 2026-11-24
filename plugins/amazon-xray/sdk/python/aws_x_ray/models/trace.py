from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .segment import Segment, SegmentDict


class Trace(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The unique identifier for the request that generated the trace's segments and subsegments."""

    duration: Optional[float] = Field(default=UNSET, alias="Duration")
    """The length of time in seconds between the start time of the earliest segment that started and the end time of the
    last segment that completed."""

    limit_exceeded: Optional[bool] = Field(default=UNSET, alias="LimitExceeded")
    """LimitExceeded is set to true when the trace has exceeded the Trace document size limit. For more information
    about this limit and other X-Ray limits and quotas, see Amazon Web Services X-Ray endpoints and quotas."""

    segments: Optional[list[Segment]] = Field(default=UNSET, alias="Segments")
    """Segment documents for the segments and subsegments that comprise the trace."""


class TraceDict(TypedDict):
    id: NotRequired[str]
    duration: NotRequired[float]
    limit_exceeded: NotRequired[bool]
    segments: NotRequired[list[SegmentDict]]
