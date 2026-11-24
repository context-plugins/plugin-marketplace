from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ShippingRateUsageResponse(SdkBaseModel):
    plan: str
    status: str
    quota: int
    used: int
    remaining: int
    rate_limit_per_minute: int = Field(alias="rateLimitPerMinute")
    period_start: Optional[RFC3339DateTime] = Field(default=UNSET, alias="periodStart")
    period_end: Optional[RFC3339DateTime] = Field(default=UNSET, alias="periodEnd")
    subscription_url: str = Field(alias="subscriptionUrl")


class ShippingRateUsageResponseDict(TypedDict):
    plan: str
    status: str
    quota: int
    used: int
    remaining: int
    rate_limit_per_minute: int
    period_start: NotRequired[RFC3339DateTime]
    period_end: NotRequired[RFC3339DateTime]
    subscription_url: str
