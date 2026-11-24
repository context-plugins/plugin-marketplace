from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .governance import Governance, GovernanceDict
from .state import State, StateDict


class ApiV1TasksRequest(SdkBaseModel):
    title: str
    """A short name for the objective"""

    objective: str
    """What the work is ultimately for, in a sentence or two. Kept apart from the conversation and returned at the top
    of every context"""

    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    """Keep it inside one workspace; only its members and administrators can see it"""

    flow_id: Optional[UUID] = Field(default=UNSET, alias="flowId")
    """The flow its approvals and reviews belong to, so a decision put to approval lands on the same timeline"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own reference. An open objective you started under the same one is returned instead of a new one, so a
    restarted agent resumes its goal"""

    session_url: Optional[str] = Field(default=UNSET, alias="sessionUrl")
    """A link to the conversation where this work happens, if your tool has one"""

    state: Optional[State] = UNSET
    """The starting state, if anything is already known"""

    governance: Optional[Governance] = UNSET
    """Govern it from the start (Compliance Mode, Business and Enterprise): the AI system, purpose, owners, risk, data
    and oversight"""


class ApiV1TasksRequestDict(TypedDict):
    title: str
    objective: str
    workspace_id: NotRequired[UUID]
    flow_id: NotRequired[UUID]
    external_id: NotRequired[str]
    session_url: NotRequired[str]
    state: NotRequired[StateDict]
    governance: NotRequired[GovernanceDict]
