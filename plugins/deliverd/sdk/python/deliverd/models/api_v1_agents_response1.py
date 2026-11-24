from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr
from .recent_gate import RecentGate, RecentGateDict


class ApiV1AgentsResponse1(SdkBaseModel):
    id: UUID
    name: str
    description: str | None
    provider: str
    platform: str
    provider_agent_id: str | None = Field(alias="providerAgentId")
    environment: str | None
    status: StatusOrStr
    registered_via: str = Field(alias="registeredVia")
    created_at: str = Field(alias="createdAt")
    recent_gates: list[RecentGate] = Field(alias="recentGates")


class ApiV1AgentsResponse1Dict(TypedDict):
    id: UUID
    name: str
    description: str | None
    provider: str
    platform: str
    provider_agent_id: str | None
    environment: str | None
    status: StatusOrStr
    registered_via: str
    created_at: str
    recent_gates: list[RecentGateDict]
