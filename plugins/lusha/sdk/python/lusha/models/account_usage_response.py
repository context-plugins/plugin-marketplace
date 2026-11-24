from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .credits_usage import CreditsUsage, CreditsUsageDict
from .plan_info import PlanInfo, PlanInfoDict
from .pricing_entry import PricingEntry, PricingEntryDict
from .rate_limits import RateLimits, RateLimitsDict


class AccountUsageResponse(SdkBaseModel):
    credits: Optional[CreditsUsage] = UNSET
    rate_limits: Optional[RateLimits] = Field(default=UNSET, alias="rateLimits")
    plan: Optional[PlanInfo] = UNSET
    pricing: Optional[dict[str, PricingEntry]] = UNSET


class AccountUsageResponseDict(TypedDict):
    credits: NotRequired[CreditsUsageDict]
    rate_limits: NotRequired[RateLimitsDict]
    plan: NotRequired[PlanInfoDict]
    pricing: NotRequired[dict[str, PricingEntryDict]]
