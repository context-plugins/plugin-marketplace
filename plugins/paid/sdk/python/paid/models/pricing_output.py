from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_output_pricing_type import PricingOutputPricingTypeOrStr
from .enums.pricing_output_signal_type import PricingOutputSignalTypeOrStr
from .pricing_price_point_output import PricingPricePointOutput, PricingPricePointOutputDict


class PricingOutput(SdkBaseModel):
    pricing_type: PricingOutputPricingTypeOrStr = Field(alias="pricingType")
    charge_type: str = Field(alias="chargeType")
    pricing_model: Optional[str] = Field(default=UNSET, alias="pricingModel")
    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    signal_type: Optional[PricingOutputSignalTypeOrStr] = Field(default=UNSET, alias="signalType")
    billing_frequency: Optional[str] = Field(default=UNSET, alias="billingFrequency")
    billing_type: Optional[str] = Field(default=UNSET, alias="billingType")
    credits_currency_id: Optional[str] = Field(default=UNSET, alias="creditsCurrencyId")
    credit_cost: Optional[float] = Field(default=UNSET, alias="creditCost")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    percentage_value: Optional[float] = Field(default=UNSET, alias="percentageValue")
    cost_plus_multiplier: Optional[float] = Field(default=UNSET, alias="costPlusMultiplier")
    price_points: list[PricingPricePointOutput] = Field(alias="pricePoints")


class PricingOutputDict(TypedDict):
    pricing_type: PricingOutputPricingTypeOrStr
    charge_type: str
    pricing_model: NotRequired[str]
    event_name: NotRequired[str]
    signal_type: NotRequired[PricingOutputSignalTypeOrStr]
    billing_frequency: NotRequired[str]
    billing_type: NotRequired[str]
    credits_currency_id: NotRequired[str]
    credit_cost: NotRequired[float]
    unit_value: NotRequired[float]
    percentage_value: NotRequired[float]
    cost_plus_multiplier: NotRequired[float]
    price_points: list[PricingPricePointOutputDict]
