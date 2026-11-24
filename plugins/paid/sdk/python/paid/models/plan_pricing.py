from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.plan_pricing_billing_frequency import PlanPricingBillingFrequencyOrStr
from .price_point import PricePoint, PricePointDict


class PlanPricing(SdkBaseModel):
    """The pricing configuration for a plan. Uses the same PricePoints structure as product pricing."""

    price_points: dict[str, PricePoint] = Field(alias="PricePoints")
    """Price points keyed by currency code (e.g., "USD", "EUR")"""

    billing_frequency: PlanPricingBillingFrequencyOrStr = Field(alias="billingFrequency")
    """The billing frequency for the plan"""

    billing_frequency_custom_months: Optional[float] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    """Custom billing frequency in months (when billingFrequency is "custom")"""


class PlanPricingDict(TypedDict):
    price_points: dict[str, PricePointDict]
    billing_frequency: PlanPricingBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[float]
