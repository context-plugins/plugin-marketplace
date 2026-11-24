from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AtifFinalMetrics(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    total_prompt_tokens: Optional[int] = UNSET
    total_completion_tokens: Optional[int] = UNSET
    total_cached_tokens: Optional[int] = UNSET
    total_cost_usd: Optional[float] = UNSET
    total_steps: Optional[int] = UNSET
    extra: Optional[Any] = UNSET


class AtifFinalMetricsDict(TypedDict):
    total_prompt_tokens: NotRequired[int]
    total_completion_tokens: NotRequired[int]
    total_cached_tokens: NotRequired[int]
    total_cost_usd: NotRequired[float]
    total_steps: NotRequired[int]
    extra: NotRequired[Any]
