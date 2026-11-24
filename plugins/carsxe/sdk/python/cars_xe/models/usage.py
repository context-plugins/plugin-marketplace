from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Usage(SdkBaseModel):
    current: Optional[float] = UNSET
    """Current usage in the billing period."""

    limit: Optional[float] = UNSET
    """Included quota for the billing period."""

    remaining: Optional[float] = UNSET
    """Remaining included quota."""


class UsageDict(TypedDict):
    current: NotRequired[float]
    limit: NotRequired[float]
    remaining: NotRequired[float]
