from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TraceSegmentsRequest(SdkBaseModel):
    trace_segment_documents: list[str] = Field(alias="TraceSegmentDocuments")
    """A string containing a JSON document defining one or more segments or subsegments."""


class TraceSegmentsRequestDict(TypedDict):
    trace_segment_documents: list[str]
