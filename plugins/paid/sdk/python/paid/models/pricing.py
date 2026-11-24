from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_price_point import AgentPricePoint, AgentPricePointDict
from .enums.billing_frequency import BillingFrequencyOrStr
from .enums.charge_type import ChargeTypeOrStr
from .enums.pricing_model_type import PricingModelTypeOrStr


class Pricing(SdkBaseModel):
    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    taxable: bool
    credit_cost: Optional[float] = Field(default=UNSET, alias="creditCost")
    charge_type: ChargeTypeOrStr = Field(alias="chargeType")
    pricing_model: PricingModelTypeOrStr = Field(alias="pricingModel")
    billing_frequency: BillingFrequencyOrStr = Field(alias="billingFrequency")
    price_points: dict[str, AgentPricePoint] = Field(alias="pricePoints")


class PricingDict(TypedDict):
    event_name: NotRequired[str]
    taxable: bool
    credit_cost: NotRequired[float]
    charge_type: ChargeTypeOrStr
    pricing_model: PricingModelTypeOrStr
    billing_frequency: BillingFrequencyOrStr
    price_points: dict[str, AgentPricePointDict]
