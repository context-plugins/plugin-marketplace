from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.check_executor_type import CheckExecutorTypeOrStr
from .enums.check_run_status import CheckRunStatusOrStr
from .enums.check_subject_type import CheckSubjectTypeOrStr


class CheckRunResponse(SdkBaseModel):
    """One immutable check execution and its subject snapshot."""

    id: UUID
    check_key: str
    definition_version: int
    definition_snapshot: Any
    definition_hash: str
    executor_type: CheckExecutorTypeOrStr
    """Execution mechanisms supported by a check definition."""

    subject_type: CheckSubjectTypeOrStr
    """Platform resources supported by the check framework."""

    subject_id: UUID
    subject_snapshot: Any
    snapshot_hash: str
    status: CheckRunStatusOrStr
    """Lifecycle states for a platform check run."""

    result: Optional[Any] = UNSET
    summary: str
    error: str
    execution_trace_id: UUID
    attempt: int
    created_at: RFC3339DateTime
    completed_at: RFC3339DateTime


class CheckRunResponseDict(TypedDict):
    id: UUID
    check_key: str
    definition_version: int
    definition_snapshot: Any
    definition_hash: str
    executor_type: CheckExecutorTypeOrStr
    subject_type: CheckSubjectTypeOrStr
    subject_id: UUID
    subject_snapshot: Any
    snapshot_hash: str
    status: CheckRunStatusOrStr
    result: NotRequired[Any]
    summary: str
    error: str
    execution_trace_id: UUID
    attempt: int
    created_at: RFC3339DateTime
    completed_at: RFC3339DateTime
