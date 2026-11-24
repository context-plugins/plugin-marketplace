from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.job_status import JobStatusOrStr
from .job_import_trace_response import JobImportTraceResponse, JobImportTraceResponseDict


class JobImportResponse(SdkBaseModel):
    job_id: UUID
    status: JobStatusOrStr
    traces: list[JobImportTraceResponse]


class JobImportResponseDict(TypedDict):
    job_id: UUID
    status: JobStatusOrStr
    traces: list[JobImportTraceResponseDict]
