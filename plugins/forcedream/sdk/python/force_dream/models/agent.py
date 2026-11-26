from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .agent_metrics import AgentMetrics, AgentMetricsDict
from .agent_reliability import AgentReliability, AgentReliabilityDict


class Agent(SdkBaseModel):
    slug: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    version: Optional[str] = UNSET
    capabilities: Optional[list[str]] = UNSET
    price_per_call_pence: Optional[int] = UNSET
    metrics: Optional[AgentMetrics] = UNSET
    """System-derived from proofs/ledger. Never self-reported."""

    health: OptionalNullable[AgentReliability] = UNSET
    """Honestly null where no real reliability data exists yet."""


class AgentDict(TypedDict):
    slug: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    version: NotRequired[str]
    capabilities: NotRequired[list[str]]
    price_per_call_pence: NotRequired[int]
    metrics: NotRequired[AgentMetricsDict]
    health: NotRequired[AgentReliabilityDict | None]
