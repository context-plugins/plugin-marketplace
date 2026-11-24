from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rate_limit_tier import RateLimitTier, RateLimitTierDict


class RateLimits(SdkBaseModel):
    daily: Optional[RateLimitTier] = UNSET
    hourly: Optional[RateLimitTier] = UNSET
    minute: Optional[RateLimitTier] = UNSET


class RateLimitsDict(TypedDict):
    daily: NotRequired[RateLimitTierDict]
    hourly: NotRequired[RateLimitTierDict]
    minute: NotRequired[RateLimitTierDict]
