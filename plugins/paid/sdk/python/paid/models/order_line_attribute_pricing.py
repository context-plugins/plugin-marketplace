from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_frequency import BillingFrequencyOrStr
from .enums.charge_type import ChargeTypeOrStr
from .enums.pricing_model_type import PricingModelTypeOrStr
from .price_point import PricePoint, PricePointDict


class OrderLineAttributePricing(SdkBaseModel):
    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    charge_type: Optional[ChargeTypeOrStr] = Field(default=UNSET, alias="chargeType")
    price_point: Optional[PricePoint] = Field(default=UNSET, alias="pricePoint")
    pricing_model: Optional[PricingModelTypeOrStr] = Field(default=UNSET, alias="pricingModel")
    billing_frequency: Optional[BillingFrequencyOrStr] = Field(default=UNSET, alias="billingFrequency")


class OrderLineAttributePricingDict(TypedDict):
    event_name: NotRequired[str]
    charge_type: NotRequired[ChargeTypeOrStr]
    price_point: NotRequired[PricePointDict]
    pricing_model: NotRequired[PricingModelTypeOrStr]
    billing_frequency: NotRequired[BillingFrequencyOrStr]
