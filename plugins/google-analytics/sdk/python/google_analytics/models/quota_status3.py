from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus3(SdkBaseModel):
    """Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties can use up to 50
    concurrent requests."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatus3Dict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
