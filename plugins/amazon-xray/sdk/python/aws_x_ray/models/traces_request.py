from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TracesRequest(SdkBaseModel):
    trace_ids: list[str] = Field(alias="TraceIds")
    """Specify the trace IDs of requests for which to retrieve segments."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class TracesRequestDict(TypedDict):
    trace_ids: list[str]
    next_token: NotRequired[str]
