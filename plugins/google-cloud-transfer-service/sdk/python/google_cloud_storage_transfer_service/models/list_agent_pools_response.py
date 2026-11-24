from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_pool import AgentPool, AgentPoolDict


class ListAgentPoolsResponse(SdkBaseModel):
    """Response from ListAgentPools."""

    agent_pools: Optional[list[AgentPool]] = Field(default=UNSET, alias="agentPools")
    """A list of agent pools."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The list next page token."""


class ListAgentPoolsResponseDict(TypedDict):
    agent_pools: NotRequired[list[AgentPoolDict]]
    next_page_token: NotRequired[str]
