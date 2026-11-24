from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_import_trace import JobImportTrace, JobImportTraceDict


class JobImportRequest(SdkBaseModel):
    """Runs of a job done outside HUD, imported into the taskset holding their tasks.

    The job is created by the first call for its ``external_id`` in the taskset; later calls add traces and leave its
    fields as they are."""

    taskset_id: UUID
    external_id: str
    """Identity of the job in the system that ran it, as ``<system>:<id>``"""

    name: str
    group_size: int = 1
    """Runs per task"""

    metadata: Optional[Any] = UNSET
    traces: list[JobImportTrace]


class JobImportRequestDict(TypedDict):
    taskset_id: UUID
    external_id: str
    name: str
    group_size: NotRequired[int]
    metadata: NotRequired[Any]
    traces: list[JobImportTraceDict]
