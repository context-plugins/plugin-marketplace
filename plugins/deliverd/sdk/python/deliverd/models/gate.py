from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .authorisation import Authorisation, AuthorisationDict
from .change import Change, ChangeDict
from .concern import Concern, ConcernDict
from .enums.basis import BasisOrStr
from .enums.decision_deliverd_dev_gates_api import DecisionDeliverdDevGatesApiOrStr
from .enums.outcome import OutcomeOrStr
from .enums.status_deliverd_dev_gates_api import StatusDeliverdDevGatesApiOrStr
from .execution1 import Execution1, Execution1Dict
from .scope import Scope, ScopeDict


class Gate(SdkBaseModel):
    id: UUID
    status: StatusDeliverdDevGatesApiOrStr
    allowed: bool
    input: dict[str, Any]
    changes: list[Change]
    basis: BasisOrStr
    reason: str | None
    rule: str | None
    policy_version_id: UUID | None = Field(alias="policyVersionId")
    approval_id: UUID | None = Field(alias="approvalId")
    approval_url: str | None = Field(alias="approvalUrl")
    outcome: OutcomeOrStr | None
    settled_at: str | None = Field(alias="settledAt")
    concerns: list[Concern]
    reused: bool
    decision: DecisionDeliverdDevGatesApiOrStr
    can_execute: bool = Field(alias="canExecute")
    blocked_because: str | None = Field(alias="blockedBecause")
    scope: Scope
    authorisation: Authorisation
    action_id: str = Field(alias="actionId")
    agent_id: str | None = Field(alias="agentId")
    flow_id: str | None = Field(alias="flowId")
    supersedes_gate_id: str | None = Field(alias="supersedesGateId")
    description: str | None
    requested_by: str = Field(alias="requestedBy")
    created_at: str | None = Field(alias="createdAt")
    decision_token: str | None = Field(alias="decisionToken")
    """The yes, signed with this deployment's Ed25519 key, while ``canExecute`` is true. Hand it to the code that
    performs the action, which verifies it before acting. Null otherwise"""

    callback_secret: Optional[str] = Field(default=UNSET, alias="callbackSecret")
    executions: Optional[list[Execution1]] = UNSET


class GateDict(TypedDict):
    id: UUID
    status: StatusDeliverdDevGatesApiOrStr
    allowed: bool
    input: dict[str, Any]
    changes: list[ChangeDict]
    basis: BasisOrStr
    reason: str | None
    rule: str | None
    policy_version_id: UUID | None
    approval_id: UUID | None
    approval_url: str | None
    outcome: OutcomeOrStr | None
    settled_at: str | None
    concerns: list[ConcernDict]
    reused: bool
    decision: DecisionDeliverdDevGatesApiOrStr
    can_execute: bool
    blocked_because: str | None
    scope: ScopeDict
    authorisation: AuthorisationDict
    action_id: str
    agent_id: str | None
    flow_id: str | None
    supersedes_gate_id: str | None
    description: str | None
    requested_by: str
    created_at: str | None
    decision_token: str | None
    callback_secret: NotRequired[str]
    executions: NotRequired[list[Execution1Dict]]
