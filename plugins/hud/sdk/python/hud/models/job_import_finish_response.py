from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.job_status import JobStatusOrStr


class JobImportFinishResponse(SdkBaseModel):
    job_id: UUID
    status: JobStatusOrStr


class JobImportFinishResponseDict(TypedDict):
    job_id: UUID
    status: JobStatusOrStr
