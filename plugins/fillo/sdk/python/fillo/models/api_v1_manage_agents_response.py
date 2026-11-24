from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .agent_grant import AgentGrant, AgentGrantDict


class ApiV1ManageAgentsResponse(SdkBaseModel):
    grants: list[AgentGrant]


class ApiV1ManageAgentsResponseDict(TypedDict):
    grants: list[AgentGrantDict]
