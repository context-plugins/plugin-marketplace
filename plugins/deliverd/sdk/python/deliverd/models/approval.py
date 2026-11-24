from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent1 import Agent1, Agent1Dict
from .change import Change, ChangeDict
from .concern import Concern, ConcernDict
from .enums.risk import RiskOrStr
from .enums.status1 import Status1OrStr
from .factor1 import Factor1, Factor1Dict
from .link1 import Link1, Link1Dict
from .question import Question, QuestionDict
from .recommendation1 import Recommendation1, Recommendation1Dict


class Approval(SdkBaseModel):
    callback_secret: Optional[str] = Field(default=UNSET, alias="callbackSecret")
    id: UUID
    status: Status1OrStr
    url: str
    title: str
    description: str | None
    risk: RiskOrStr
    factors: list[Factor1]
    links: list[Link1]
    report_id: UUID | None = Field(alias="reportId")
    external_id: str | None = Field(alias="externalId")
    metadata: dict[str, Any]
    input: dict[str, Any] | None
    editable_fields: list[str] = Field(alias="editableFields")
    approved_input: dict[str, Any] | None = Field(alias="approvedInput")
    changes: list[Change]
    concerns: list[Concern]
    requested_by: str = Field(alias="requestedBy")
    approvers: list[UUID]
    required_approvals: float = Field(alias="requiredApprovals")
    approvals_so_far: float = Field(alias="approvalsSoFar")
    decided_by: str | None = Field(alias="decidedBy")
    decided_by_id: UUID | None = Field(alias="decidedById")
    decided_at: str | None = Field(alias="decidedAt")
    note: str | None
    expires_at: str | None = Field(alias="expiresAt")
    questions: list[Question]
    recommendation: Recommendation1 | None
    agent: Agent1 | None
    model: str | None
    created_at: str = Field(alias="createdAt")


class ApprovalDict(TypedDict):
    callback_secret: NotRequired[str]
    id: UUID
    status: Status1OrStr
    url: str
    title: str
    description: str | None
    risk: RiskOrStr
    factors: list[Factor1Dict]
    links: list[Link1Dict]
    report_id: UUID | None
    external_id: str | None
    metadata: dict[str, Any]
    input: dict[str, Any] | None
    editable_fields: list[str]
    approved_input: dict[str, Any] | None
    changes: list[ChangeDict]
    concerns: list[ConcernDict]
    requested_by: str
    approvers: list[UUID]
    required_approvals: float
    approvals_so_far: float
    decided_by: str | None
    decided_by_id: UUID | None
    decided_at: str | None
    note: str | None
    expires_at: str | None
    questions: list[QuestionDict]
    recommendation: Recommendation1Dict | None
    agent: Agent1Dict | None
    model: str | None
    created_at: str
