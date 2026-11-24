from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .agent_deliverd_dev_approvals_api import AgentDeliverdDevApprovalsApi, AgentDeliverdDevApprovalsApiDict
from .question_deliverd_dev_collections_api import (
    QuestionDeliverdDevCollectionsApi,
    QuestionDeliverdDevCollectionsApiDict,
)


class ApiV1CollectionsRequest(SdkBaseModel):
    title: str
    """What you need, as a headline the person sees first"""

    instructions: Optional[str] = UNSET
    """Why you are asking, shown above the questions"""

    questions: list[QuestionDeliverdDevCollectionsApi]
    """What to ask, in the order it should be answered"""

    respondents: list[str]
    """Emails or user ids. An active member, or a guest the organisation already knows — anyone else is refused rather
    than emailed"""

    required_responses: Optional[int] = Field(default=UNSET, alias="requiredResponses")
    """How many submitted replies complete it; everyone asked, when omitted"""

    report_id: Optional[UUID] = Field(default=UNSET, alias="reportId")
    """A published report the request is about"""

    due_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="dueAt")
    """Shown to the person, and what the single reminder is measured against"""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """After this the request closes unanswered"""

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


class ApiV1CollectionsRequestDict(TypedDict):
    title: str
    instructions: NotRequired[str]
    questions: list[QuestionDeliverdDevCollectionsApiDict]
    respondents: list[str]
    required_responses: NotRequired[int]
    report_id: NotRequired[UUID]
    due_at: NotRequired[RFC3339DateTime]
    expires_at: NotRequired[RFC3339DateTime]
    external_id: NotRequired[str]
    flow_id: NotRequired[UUID]
    agent: NotRequired[AgentDeliverdDevApprovalsApiDict]
    model: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    callback_url: NotRequired[str]
