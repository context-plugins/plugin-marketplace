from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus1(SdkBaseModel):
    """Analytics Properties can send up to 120 requests with potentially thresholded dimensions per hour. In a batch
    request, each report request is individually counted for this quota if the request contains potentially thresholded
    dimensions."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatus1Dict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
