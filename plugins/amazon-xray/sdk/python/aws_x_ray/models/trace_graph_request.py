from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TraceGraphRequest(SdkBaseModel):
    trace_ids: list[str] = Field(alias="TraceIds")
    """Trace IDs of requests for which to generate a service graph."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class TraceGraphRequestDict(TypedDict):
    trace_ids: list[str]
    next_token: NotRequired[str]
