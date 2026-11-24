from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.retrieval_status import RetrievalStatusOrStr
from .enums.trace_format import TraceFormatOrStr
from .retrieved_trace import RetrievedTrace, RetrievedTraceDict


class ListRetrievedTracesResult(SdkBaseModel):
    retrieval_status: Optional[RetrievalStatusOrStr] = Field(default=UNSET, alias="RetrievalStatus")
    """Status of the retrieval."""

    trace_format: Optional[TraceFormatOrStr] = Field(default=UNSET, alias="TraceFormat")
    """Format of the requested traces."""

    traces: Optional[list[RetrievedTrace]] = Field(default=UNSET, alias="Traces")
    """Full traces for the specified requests."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of indexes."""


class ListRetrievedTracesResultDict(TypedDict):
    retrieval_status: NotRequired[RetrievalStatusOrStr]
    trace_format: NotRequired[TraceFormatOrStr]
    traces: NotRequired[list[RetrievedTraceDict]]
    next_token: NotRequired[str]
