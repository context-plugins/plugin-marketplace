from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.plan_pricing_pricing_type import PlanPricingPricingTypeOrStr


class PlanPricing1(SdkBaseModel):
    """Pricing configuration for a plan attribute. Money amounts are expressed in cents."""

    pricing_type: PlanPricingPricingTypeOrStr = Field(alias="pricingType")
    charge_type: str = Field(alias="chargeType")
    pricing_model: str = Field(alias="pricingModel")
    price_points: list[Any] = Field(alias="pricePoints")


class PlanPricing1Dict(TypedDict):
    pricing_type: PlanPricingPricingTypeOrStr
    charge_type: str
    pricing_model: str
    price_points: list[Any]
