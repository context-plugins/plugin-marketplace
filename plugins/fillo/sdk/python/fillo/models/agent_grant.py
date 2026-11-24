from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.approval_policy import ApprovalPolicyOrStr


class AgentGrant(SdkBaseModel):
    id: str
    """The grant id — also the value a revocation must confirm with."""

    client: str
    scopes: list[str]
    approval_policy: ApprovalPolicyOrStr = Field(alias="approvalPolicy")
    """``ask`` sends every outward action to a human approval link first; ``auto`` runs Tier B directly. Destructive
    actions always need the link."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    last_used_at: RFC3339DateTime | None = Field(alias="lastUsedAt")
    expires_at: RFC3339DateTime | None = Field(alias="expiresAt")
    expired: bool


class AgentGrantDict(TypedDict):
    id: str
    client: str
    scopes: list[str]
    approval_policy: ApprovalPolicyOrStr
    created_at: RFC3339DateTime
    last_used_at: RFC3339DateTime | None
    expires_at: RFC3339DateTime | None
    expired: bool
