from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AtifMetrics(SdkBaseModel):
    prompt_tokens: Optional[int] = UNSET
    completion_tokens: Optional[int] = UNSET
    cached_tokens: Optional[int] = UNSET
    cost_usd: Optional[float] = UNSET
    prompt_token_ids: Optional[list[int]] = UNSET
    completion_token_ids: Optional[list[int]] = UNSET
    logprobs: Optional[list[float]] = UNSET
    extra: Optional[Any] = UNSET


class AtifMetricsDict(TypedDict):
    prompt_tokens: NotRequired[int]
    completion_tokens: NotRequired[int]
    cached_tokens: NotRequired[int]
    cost_usd: NotRequired[float]
    prompt_token_ids: NotRequired[list[int]]
    completion_token_ids: NotRequired[list[int]]
    logprobs: NotRequired[list[float]]
    extra: NotRequired[Any]
