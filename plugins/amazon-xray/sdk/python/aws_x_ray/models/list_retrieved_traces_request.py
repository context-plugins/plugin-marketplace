from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.trace_format import TraceFormatOrStr


class ListRetrievedTracesRequest(SdkBaseModel):
    retrieval_token: str = Field(alias="RetrievalToken")
    """Retrieval token."""

    trace_format: Optional[TraceFormatOrStr] = Field(default=UNSET, alias="TraceFormat")
    """Format of the requested traces."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of indexes."""


class ListRetrievedTracesRequestDict(TypedDict):
    retrieval_token: str
    trace_format: NotRequired[TraceFormatOrStr]
    next_token: NotRequired[str]
