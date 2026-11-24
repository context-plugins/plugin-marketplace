from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unprocessed_trace_segment import UnprocessedTraceSegment, UnprocessedTraceSegmentDict


class PutTraceSegmentsResult(SdkBaseModel):
    unprocessed_trace_segments: Optional[list[UnprocessedTraceSegment]] = Field(
        default=UNSET, alias="UnprocessedTraceSegments"
    )
    """Segments that failed processing."""


class PutTraceSegmentsResultDict(TypedDict):
    unprocessed_trace_segments: NotRequired[list[UnprocessedTraceSegmentDict]]
