from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .agent import Agent, AgentDict


class ApiV1AgentsResponse(SdkBaseModel):
    agents: list[Agent]
    next_cursor: str | None = Field(alias="nextCursor")


class ApiV1AgentsResponseDict(TypedDict):
    agents: list[AgentDict]
    next_cursor: str | None
