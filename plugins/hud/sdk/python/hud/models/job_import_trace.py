from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_import_agent import JobImportAgent, JobImportAgentDict


class JobImportTrace(SdkBaseModel):
    """One run of a task, done outside HUD."""

    external_id: str
    task_digest: str
    """``content_digest`` of the build whose source defines the task the run executed"""

    name: Optional[str] = UNSET
    agent: Optional[JobImportAgent] = UNSET
    model: Optional[str] = UNSET
    """Model the run used, as the source reported it. A HUD model id or ``model_name`` also links the trace to that
    model."""

    metadata: Optional[Any] = UNSET


class JobImportTraceDict(TypedDict):
    external_id: str
    task_digest: str
    name: NotRequired[str]
    agent: NotRequired[JobImportAgentDict]
    model: NotRequired[str]
    metadata: NotRequired[Any]
