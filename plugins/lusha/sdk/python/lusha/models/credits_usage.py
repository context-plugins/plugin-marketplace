from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditsUsage(SdkBaseModel):
    total: Optional[float] = UNSET
    used: Optional[float] = UNSET
    remaining: Optional[float] = UNSET


class CreditsUsageDict(TypedDict):
    total: NotRequired[float]
    used: NotRequired[float]
    remaining: NotRequired[float]
