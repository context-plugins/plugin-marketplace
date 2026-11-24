from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus2(SdkBaseModel):
    """Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties can use 2,000,000
    tokens per day. Most requests consume fewer than 10 tokens."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatus2Dict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
