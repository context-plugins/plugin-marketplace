from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NumberPricing(SdkBaseModel):
    """What your account pays for this number type, plan-aware."""

    setup_fee: Optional[float] = Field(default=UNSET, alias="setupFee")
    monthly_fee: Optional[float] = Field(default=UNSET, alias="monthlyFee")
    per_minute_rate: Optional[float] = Field(default=UNSET, alias="perMinuteRate")
    total_due_now: Optional[float] = Field(default=UNSET, alias="totalDueNow")
    """First month at your plan's rate (setupFee is always 0). 0 when the number is included in your subscription."""

    included_in_subscription: Optional[bool] = Field(default=UNSET, alias="includedInSubscription")


class NumberPricingDict(TypedDict):
    setup_fee: NotRequired[float]
    monthly_fee: NotRequired[float]
    per_minute_rate: NotRequired[float]
    total_due_now: NotRequired[float]
    included_in_subscription: NotRequired[bool]
