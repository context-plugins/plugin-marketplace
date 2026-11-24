from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus5(SdkBaseModel):
    """Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties can use 400,000
    tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the
    hourly, daily, and per project hourly quotas."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatus5Dict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
