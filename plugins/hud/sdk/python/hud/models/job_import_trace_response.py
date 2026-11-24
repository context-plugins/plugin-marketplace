from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.trace_status import TraceStatusOrStr


class JobImportTraceResponse(SdkBaseModel):
    external_id: str
    trace_id: UUID
    task_version_id: UUID
    status: TraceStatusOrStr


class JobImportTraceResponseDict(TypedDict):
    external_id: str
    trace_id: UUID
    task_version_id: UUID
    status: TraceStatusOrStr
