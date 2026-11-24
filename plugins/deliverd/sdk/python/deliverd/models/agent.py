from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class Agent(SdkBaseModel):
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


class AgentDict(TypedDict):
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
