from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_verifier_task import SubmittedVerifierTask, SubmittedVerifierTaskDict
from .unions.columns2 import Columns2, Columns2Dict


class TasksetExportTask(SdkBaseModel):
    """One exported task — the read-side mirror of ``TaskUploadItem`` (latest version per task).

    ``name`` is the upload upsert key (``external_id`` falling back to the task name), so re-uploading an export updates
    the same tasks."""

    name: str
    env: Optional[str] = UNSET
    scenario: Optional[str] = UNSET
    args: Optional[Any] = UNSET
    validation: Optional[list[Any]] = UNSET
    agent_config: Optional[Any] = UNSET
    columns: Optional[dict[str, Columns2]] = UNSET
    runtime_config: Optional[Any] = UNSET
    verifier: Optional[SubmittedVerifierTask] = UNSET


class TasksetExportTaskDict(TypedDict):
    name: str
    env: NotRequired[str]
    scenario: NotRequired[str]
    args: NotRequired[Any]
    validation: NotRequired[list[Any]]
    agent_config: NotRequired[Any]
    columns: NotRequired[dict[str, Columns2Dict]]
    runtime_config: NotRequired[Any]
    verifier: NotRequired[SubmittedVerifierTaskDict]
