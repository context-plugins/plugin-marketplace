from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuotaStatus(SdkBaseModel):
    """Current state for a particular quota group."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""


class QuotaStatusDict(TypedDict):
    remaining: NotRequired[int]
    consumed: NotRequired[int]
