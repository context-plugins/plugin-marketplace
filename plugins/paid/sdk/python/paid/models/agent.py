from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_attribute import AgentAttribute, AgentAttributeDict


class Agent(SdkBaseModel):
    id: str
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    organization_id: str = Field(alias="organizationId")
    name: str
    description: Optional[str] = UNSET
    active: bool
    agent_code: Optional[str] = Field(default=UNSET, alias="agentCode")
    agent_attributes: Optional[list[AgentAttribute]] = Field(default=UNSET, alias="agentAttributes")


class AgentDict(TypedDict):
    id: str
    external_id: NotRequired[str]
    organization_id: str
    name: str
    description: NotRequired[str]
    active: bool
    agent_code: NotRequired[str]
    agent_attributes: NotRequired[list[AgentAttributeDict]]
