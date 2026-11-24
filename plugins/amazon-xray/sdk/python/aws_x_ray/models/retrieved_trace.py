from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .span import Span, SpanDict


class RetrievedTrace(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The unique identifier for the span."""

    duration: Optional[float] = Field(default=UNSET, alias="Duration")
    """The length of time in seconds between the start time of the root span and the end time of the last span that
    completed."""

    spans: Optional[list[Span]] = Field(default=UNSET, alias="Spans")
    """Spans that comprise the trace."""


class RetrievedTraceDict(TypedDict):
    id: NotRequired[str]
    duration: NotRequired[float]
    spans: NotRequired[list[SpanDict]]
