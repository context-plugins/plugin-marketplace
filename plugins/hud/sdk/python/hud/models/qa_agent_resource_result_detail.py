from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.canonical_verdict import CanonicalVerdictOrStr
from .enums.qa_agent_result_status import QaAgentResultStatusOrStr
from .enums.qa_agent_subject_type import QaAgentSubjectTypeOrStr
from .qa_agent_result_v1 import QaAgentResultV1, QaAgentResultV1Dict


class QaAgentResourceResultDetail(SdkBaseModel):
    result: Optional[Any] = UNSET
    canonical_result: Optional[QaAgentResultV1] = UNSET
    canonical_verdict: Optional[CanonicalVerdictOrStr] = UNSET
    id: UUID
    qa_agent_id: UUID
    subject_type: QaAgentSubjectTypeOrStr
    """Canonical resources a QA agent can analyze."""

    subject_id: UUID
    agent_name: str
    status: QaAgentResultStatusOrStr
    error: Optional[str] = UNSET
    analysis_trace_id: UUID
    agent_config_hash: str
    stale: bool
    snapshot_hash: str
    attempt: int
    batch_id: Optional[UUID] = UNSET
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime


class QaAgentResourceResultDetailDict(TypedDict):
    result: NotRequired[Any]
    canonical_result: NotRequired[QaAgentResultV1Dict]
    canonical_verdict: NotRequired[CanonicalVerdictOrStr]
    id: UUID
    qa_agent_id: UUID
    subject_type: QaAgentSubjectTypeOrStr
    subject_id: UUID
    agent_name: str
    status: QaAgentResultStatusOrStr
    error: NotRequired[str]
    analysis_trace_id: UUID
    agent_config_hash: str
    stale: bool
    snapshot_hash: str
    attempt: int
    batch_id: NotRequired[UUID]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
