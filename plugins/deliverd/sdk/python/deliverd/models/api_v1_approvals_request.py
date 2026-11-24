from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .agent_deliverd_dev_approvals_api import AgentDeliverdDevApprovalsApi, AgentDeliverdDevApprovalsApiDict
from .enums.risk_deliverd_dev_approvals_api import RiskDeliverdDevApprovalsApiOrStr
from .factor import Factor, FactorDict
from .link import Link, LinkDict
from .recommendation import Recommendation, RecommendationDict


class ApiV1ApprovalsRequest(SdkBaseModel):
    title: str
    """What is being asked, as a headline"""

    description: Optional[str] = UNSET
    """Why, what it affects, what it costs — what the approver reads first"""

    risk: Optional[RiskDeliverdDevApprovalsApiOrStr] = UNSET
    """How the approver should weigh it; medium when omitted"""

    factors: Optional[list[Factor]] = UNSET
    """Evidence, one line each, shown as a checklist"""

    links: Optional[list[Link]] = UNSET
    """Where to read more"""

    report_id: Optional[UUID] = Field(default=UNSET, alias="reportId")
    """A published report the request is about"""

    approvers: Optional[list[str]] = UNSET
    """Who may decide: members, groups or workspaces by email, id or name, or an admitted guest by email where the
    organisation lets guests approve. The organisation's admins when omitted"""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """After this the request expires undecided"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own reference, returned unchanged"""

    flow_id: Optional[UUID] = Field(default=UNSET, alias="flowId")
    """The flow this belongs to — shown as a Project in the app — when it is one step of a larger piece of work. Must be
    an open flow in your organisation"""

    agent: Optional[AgentDeliverdDevApprovalsApi] = UNSET
    """Which agent is asking, in your words. Recorded and shown as declared by you; nothing is decided on it"""

    model: Optional[str] = UNSET
    """The model the agent is running on, such as claude-opus-5. Recorded and shown as declared by you"""

    metadata: Optional[dict[str, Any]] = UNSET
    input: Optional[dict[str, Any]] = UNSET
    """The arguments you will run with if this is approved, shown to the approver. The decision returns what to run
    with"""

    editable_fields: Optional[list[str]] = Field(default=UNSET, alias="editableFields")
    """Fields of ``input`` the approver may correct before approving (strings, numbers, true/false). Omitted: approve or
    reject only"""

    recommendation: Optional[Recommendation] = UNSET
    """What your model or decision engine recommends. Shown to the approver as context, never as the decision. Where the
    organisation has blind review on, a high or critical risk request's recommendation is shown only after the approver
    records their own view"""

    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """Where to POST the outcome when a person answers, signed with the callbackSecret returned by this call. Saves
    polling."""


class ApiV1ApprovalsRequestDict(TypedDict):
    title: str
    description: NotRequired[str]
    risk: NotRequired[RiskDeliverdDevApprovalsApiOrStr]
    factors: NotRequired[list[FactorDict]]
    links: NotRequired[list[LinkDict]]
    report_id: NotRequired[UUID]
    approvers: NotRequired[list[str]]
    expires_at: NotRequired[RFC3339DateTime]
    external_id: NotRequired[str]
    flow_id: NotRequired[UUID]
    agent: NotRequired[AgentDeliverdDevApprovalsApiDict]
    model: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    input: NotRequired[dict[str, Any]]
    editable_fields: NotRequired[list[str]]
    recommendation: NotRequired[RecommendationDict]
    callback_url: NotRequired[str]
