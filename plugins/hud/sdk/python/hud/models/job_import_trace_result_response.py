from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.trace_status import TraceStatusOrStr


class JobImportTraceResultResponse(SdkBaseModel):
    trace_id: UUID
    status: TraceStatusOrStr


class JobImportTraceResultResponseDict(TypedDict):
    trace_id: UUID
    status: TraceStatusOrStr
