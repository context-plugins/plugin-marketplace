from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .agent_deliverd_dev_approvals_api import AgentDeliverdDevApprovalsApi, AgentDeliverdDevApprovalsApiDict


class ApiV1ReviewsRequest(SdkBaseModel):
    title: str
    """What is being reviewed, as a headline the reviewer sees first"""

    instructions: Optional[str] = UNSET
    """What to check. Without this a reviewer decides what 'review' means, and usually decides it means 'looks fine'"""

    report_id: Optional[UUID] = Field(default=UNSET, alias="reportId")
    """The published report under review; the reviewer reads it and comments on it"""

    version_id: Optional[UUID] = Field(default=UNSET, alias="versionId")
    """Pin a version, so publishing again mid-review does not move the ground under it"""

    reviewers: list[str]
    """Emails or user ids. An active member, or a guest who can already open the report where the organisation lets
    guests review — anyone else is refused rather than emailed"""

    required_approvals: Optional[int] = Field(default=UNSET, alias="requiredApprovals")
    """How many approvals settle it; one when omitted. A single 'changes requested' settles it regardless"""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """After this the review expires unanswered"""

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
    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """Where to POST the outcome when a person answers, signed with the callbackSecret returned by this call. Saves
    polling."""


class ApiV1ReviewsRequestDict(TypedDict):
    title: str
    instructions: NotRequired[str]
    report_id: NotRequired[UUID]
    version_id: NotRequired[UUID]
    reviewers: list[str]
    required_approvals: NotRequired[int]
    expires_at: NotRequired[RFC3339DateTime]
    external_id: NotRequired[str]
    flow_id: NotRequired[UUID]
    agent: NotRequired[AgentDeliverdDevApprovalsApiDict]
    model: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    callback_url: NotRequired[str]
