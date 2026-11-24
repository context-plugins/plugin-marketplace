from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus4(SdkBaseModel):
    """Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour; Analytics 360
    Properties and cloud project pairs can have up to 50 server errors per hour."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatus4Dict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
