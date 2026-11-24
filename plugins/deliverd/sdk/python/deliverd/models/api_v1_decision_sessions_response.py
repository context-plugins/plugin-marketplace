from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .approver import Approver, ApproverDict
from .enums.approval_status import ApprovalStatusOrStr
from .enums.decision import DecisionOrStr
from .enums.mode import ModeOrStr
from .enums.status_deliverd_dev_decision_sessions_api import StatusDeliverdDevDecisionSessionsApiOrStr


class ApiV1DecisionSessionsResponse(SdkBaseModel):
    id: UUID
    object_: Literal["decision_session"] = Field(default="decision_session", alias="object")
    approval_id: UUID = Field(alias="approvalId")
    approver: Approver
    mode: ModeOrStr
    origin: str | None
    return_url: str | None = Field(alias="returnUrl")
    url: Optional[str] = UNSET
    """Returned once, when the session is made."""

    client_secret: Optional[str] = Field(default=UNSET, alias="clientSecret")
    """Returned once, when the session is made."""

    status: StatusDeliverdDevDecisionSessionsApiOrStr
    decision: DecisionOrStr | None
    approval_status: ApprovalStatusOrStr = Field(alias="approvalStatus")
    expires_at: str = Field(alias="expiresAt")
    verified_at: str | None = Field(alias="verifiedAt")
    completed_at: str | None = Field(alias="completedAt")
    created_at: str = Field(alias="createdAt")


class ApiV1DecisionSessionsResponseDict(TypedDict):
    id: UUID
    object_: Literal["decision_session"]
    approval_id: UUID
    approver: ApproverDict
    mode: ModeOrStr
    origin: str | None
    return_url: str | None
    url: NotRequired[str]
    client_secret: NotRequired[str]
    status: StatusDeliverdDevDecisionSessionsApiOrStr
    decision: DecisionOrStr | None
    approval_status: ApprovalStatusOrStr
    expires_at: str
    verified_at: str | None
    completed_at: str | None
    created_at: str
