from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .trace_response import TraceResponse, TraceResponseDict


class PaginatedResponseTraceResponse(SdkBaseModel):
    items: list[TraceResponse]
    total: int
    limit: int
    offset: int


class PaginatedResponseTraceResponseDict(TypedDict):
    items: list[TraceResponseDict]
    total: int
    limit: int
    offset: int
