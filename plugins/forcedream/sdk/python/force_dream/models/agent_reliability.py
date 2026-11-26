from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class AgentReliability(SdkBaseModel):
    """Honestly null where no real reliability data exists yet."""

    success_rate: OptionalNullable[float] = UNSET
    avg_latency_ms: OptionalNullable[float] = UNSET
    sample_size: Optional[int] = UNSET
    note: OptionalNullable[str] = UNSET


class AgentReliabilityDict(TypedDict):
    success_rate: NotRequired[float | None]
    avg_latency_ms: NotRequired[float | None]
    sample_size: NotRequired[int]
    note: NotRequired[str | None]
