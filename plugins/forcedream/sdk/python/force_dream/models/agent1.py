from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .agent_reliability import AgentReliability, AgentReliabilityDict


class Agent1(SdkBaseModel):
    agent_slug: Optional[str] = UNSET
    reliability: OptionalNullable[AgentReliability] = UNSET
    """Honestly null where no real reliability data exists yet."""


class Agent1Dict(TypedDict):
    agent_slug: NotRequired[str]
    reliability: NotRequired[AgentReliabilityDict | None]
