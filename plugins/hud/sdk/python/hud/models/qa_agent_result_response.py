from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.canonical_verdict import CanonicalVerdictOrStr
from .enums.qa_agent_result_status import QaAgentResultStatusOrStr
from .enums.qa_agent_subject_type import QaAgentSubjectTypeOrStr
from .qa_agent_result_v1 import QaAgentResultV1, QaAgentResultV1Dict


class QaAgentResultResponse(SdkBaseModel):
    result: Optional[Any] = UNSET
    canonical_result: Optional[QaAgentResultV1] = UNSET
    canonical_verdict: Optional[CanonicalVerdictOrStr] = UNSET
    id: UUID
    subject_type: Optional[QaAgentSubjectTypeOrStr] = UNSET
    """Canonical resources a QA agent can analyze."""

    subject_id: UUID
    subject_trace_id: UUID
    subject_snapshot: Optional[Any] = UNSET
    snapshot_hash: Optional[str] = UNSET
    attempt: int = 1
    qa_agent_id: UUID
    analysis_trace_id: UUID
    status: QaAgentResultStatusOrStr
    error: Optional[str] = UNSET
    batch_id: Optional[UUID] = UNSET
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime


class QaAgentResultResponseDict(TypedDict):
    result: NotRequired[Any]
    canonical_result: NotRequired[QaAgentResultV1Dict]
    canonical_verdict: NotRequired[CanonicalVerdictOrStr]
    id: UUID
    subject_type: NotRequired[QaAgentSubjectTypeOrStr]
    subject_id: UUID
    subject_trace_id: UUID
    subject_snapshot: NotRequired[Any]
    snapshot_hash: NotRequired[str]
    attempt: NotRequired[int]
    qa_agent_id: UUID
    analysis_trace_id: UUID
    status: QaAgentResultStatusOrStr
    error: NotRequired[str]
    batch_id: NotRequired[UUID]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
