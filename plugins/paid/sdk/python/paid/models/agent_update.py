from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_attribute import AgentAttribute, AgentAttributeDict


class AgentUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    active: Optional[bool] = UNSET
    agent_code: Optional[str] = Field(default=UNSET, alias="agentCode")
    agent_attributes: Optional[list[AgentAttribute]] = Field(default=UNSET, alias="agentAttributes")


class AgentUpdateDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    external_id: NotRequired[str]
    active: NotRequired[bool]
    agent_code: NotRequired[str]
    agent_attributes: NotRequired[list[AgentAttributeDict]]
