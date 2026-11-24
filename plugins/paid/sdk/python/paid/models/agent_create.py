from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentCreate(SdkBaseModel):
    name: str
    description: str
    agent_code: Optional[str] = Field(default=UNSET, alias="agentCode")
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    active: Optional[bool] = UNSET


class AgentCreateDict(TypedDict):
    name: str
    description: str
    agent_code: NotRequired[str]
    external_id: NotRequired[str]
    active: NotRequired[bool]
