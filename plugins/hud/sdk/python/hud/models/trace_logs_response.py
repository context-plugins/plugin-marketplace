from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TraceLogsResponse(SdkBaseModel):
    trace_id: UUID
    logs: str


class TraceLogsResponseDict(TypedDict):
    trace_id: UUID
    logs: str
