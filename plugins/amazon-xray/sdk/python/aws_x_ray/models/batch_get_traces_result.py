from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .trace import Trace, TraceDict


class BatchGetTracesResult(SdkBaseModel):
    traces: Optional[list[Trace]] = Field(default=UNSET, alias="Traces")
    """Full traces for the specified requests."""

    unprocessed_trace_ids: Optional[list[str]] = Field(default=UNSET, alias="UnprocessedTraceIds")
    """Trace IDs of requests that haven't been processed."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class BatchGetTracesResultDict(TypedDict):
    traces: NotRequired[list[TraceDict]]
    unprocessed_trace_ids: NotRequired[list[str]]
    next_token: NotRequired[str]
