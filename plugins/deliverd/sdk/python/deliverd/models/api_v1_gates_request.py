from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_deliverd_dev_gates_api import AgentDeliverdDevGatesApi, AgentDeliverdDevGatesApiDict
from .artifact import Artifact, ArtifactDict
from .destination import Destination, DestinationDict
from .enums.classification import ClassificationOrStr
from .enums.risk_deliverd_dev_gates_api import RiskDeliverdDevGatesApiOrStr
from .execution import Execution, ExecutionDict


class ApiV1GatesRequest(SdkBaseModel):
    action_id: str = Field(alias="actionId")
    """The registered action you are about to perform"""

    input: dict[str, Any]
    """The arguments you will actually execute with. Validated against the action's registered schema before any rule is
    applied, and stored as validated — an approver sees these values and a rule is tested against them"""

    external_id: str = Field(alias="externalId")
    """Your id for this unit of work — ``refund:ord_8812``. Required: a retry with the same id re-reads its decision
    instead of raising a second one, and no id Deliverd could invent would know which two calls are the same attempt"""

    environment: Optional[str] = UNSET
    """Where this is running, for rules that distinguish staging from production"""

    reason: Optional[str] = UNSET
    """Why you are doing it, shown to whoever is asked to decide"""

    flow_id: Optional[UUID] = Field(default=UNSET, alias="flowId")
    """The flow this belongs to, if it is part of one"""

    description: Optional[str] = UNSET
    """What you are about to do, in a sentence a person deciding will read. Same as ``reason``"""

    destination: Optional[Destination] = UNSET
    """Where the act lands. Deliverd decides whether it is inside the organisation; only a workspace, report, user,
    group or an address at one of the organisation's own domains is internal"""

    classification: Optional[ClassificationOrStr] = UNSET
    """How sensitive the data is. Can raise, never lower, what Deliverd already knows about a report it holds"""

    risk: Optional[RiskDeliverdDevGatesApiOrStr] = UNSET
    """How risky you judge it. Can raise, never lower, the action's own risk"""

    artifact: Optional[Artifact] = UNSET
    """What the act is about. An approval covers this artifact and no other: report a different hash when you record
    execution and it is refused as ``approval_invalidated``"""

    agent: Optional[AgentDeliverdDevGatesApi] = UNSET
    """Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An
    agent key already says who it is"""

    execution: Optional[Execution] = UNSET
    """The run this belongs to, found by its id or started. Use instead of flowId"""

    supersedes_gate_id: Optional[UUID] = Field(default=UNSET, alias="supersedesGateId")
    """The request this revises, after a person asked for changes. Keeps the lineage"""

    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """An https address to POST the gate's settlement and execution to, signed"""

    metadata: Optional[dict[str, Any]] = UNSET
    """Anything else a person deciding should see. Stored as your words; no rule reads it"""


class ApiV1GatesRequestDict(TypedDict):
    action_id: str
    input: dict[str, Any]
    external_id: str
    environment: NotRequired[str]
    reason: NotRequired[str]
    flow_id: NotRequired[UUID]
    description: NotRequired[str]
    destination: NotRequired[DestinationDict]
    classification: NotRequired[ClassificationOrStr]
    risk: NotRequired[RiskDeliverdDevGatesApiOrStr]
    artifact: NotRequired[ArtifactDict]
    agent: NotRequired[AgentDeliverdDevGatesApiDict]
    execution: NotRequired[ExecutionDict]
    supersedes_gate_id: NotRequired[UUID]
    callback_url: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
