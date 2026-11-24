from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class AccountUsageResponse(SdkBaseModel):
    plan: str
    quota: int
    used: int
    remaining: int
    period_start: RFC3339DateTime = Field(alias="periodStart")
    period_end: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="periodEnd")
    rate_limit_per_minute: int = Field(alias="rateLimitPerMinute")
    shared_free_quota: bool = Field(alias="sharedFreeQuota")
    rollover_balance: int = Field(alias="rolloverBalance")
    """Unused monthly requests carried from a full-price upgrade. These expire at the next renewal."""

    credit_balance: int = Field(alias="creditBalance")
    total_available: int = Field(alias="totalAvailable")
    """Carryover plus monthly requests remaining plus purchased credits."""

    purchase_credits_url: str = Field(alias="purchaseCreditsUrl")


class AccountUsageResponseDict(TypedDict):
    plan: str
    quota: int
    used: int
    remaining: int
    period_start: RFC3339DateTime
    period_end: NotRequired[RFC3339DateTime | None]
    rate_limit_per_minute: int
    shared_free_quota: bool
    rollover_balance: int
    credit_balance: int
    total_available: int
    purchase_credits_url: str
