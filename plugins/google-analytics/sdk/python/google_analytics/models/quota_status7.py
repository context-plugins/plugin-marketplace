from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus7(SdkBaseModel):
    """Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to standard Analytics
    Properties can use up to 14,000 tokens per project per hour, and Analytics 360 Properties can use 140,000 tokens per
    project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the
    hourly, daily, and per project hourly quotas."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatus7Dict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
