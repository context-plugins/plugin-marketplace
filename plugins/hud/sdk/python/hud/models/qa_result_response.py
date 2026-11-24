from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.qa_result_source import QaResultSourceOrStr
from .enums.qa_result_status import QaResultStatusOrStr
from .enums.qa_subject_type import QaSubjectTypeOrStr
from .enums.verdict import VerdictOrStr
from .qa_check_result_v1 import QaCheckResultV1, QaCheckResultV1Dict


class QaResultResponse(SdkBaseModel):
    """One result of a check on a subject: a trace, or a version of a task."""

    id: UUID
    check_key: str
    subject_type: QaSubjectTypeOrStr
    """What a check judges: a completed evaluation trace, or a task's current version."""

    subject_trace_id: Optional[UUID] = UNSET
    subject_task_id: Optional[UUID] = UNSET
    subject_task_version_id: Optional[UUID] = UNSET
    source: QaResultSourceOrStr
    """Where a result's verdict comes from."""

    status: QaResultStatusOrStr
    verdict: Optional[VerdictOrStr] = UNSET
    result: Optional[QaCheckResultV1] = UNSET
    legacy_result: Optional[Any] = UNSET
    note: Optional[str] = UNSET
    error: Optional[str] = UNSET
    created_at: RFC3339DateTime
    completed_at: Optional[RFC3339DateTime] = UNSET
    run_id: Optional[UUID] = UNSET
    analysis_trace_id: Optional[UUID] = UNSET


class QaResultResponseDict(TypedDict):
    id: UUID
    check_key: str
    subject_type: QaSubjectTypeOrStr
    subject_trace_id: NotRequired[UUID]
    subject_task_id: NotRequired[UUID]
    subject_task_version_id: NotRequired[UUID]
    source: QaResultSourceOrStr
    status: QaResultStatusOrStr
    verdict: NotRequired[VerdictOrStr]
    result: NotRequired[QaCheckResultV1Dict]
    legacy_result: NotRequired[Any]
    note: NotRequired[str]
    error: NotRequired[str]
    created_at: RFC3339DateTime
    completed_at: NotRequired[RFC3339DateTime]
    run_id: NotRequired[UUID]
    analysis_trace_id: NotRequired[UUID]
