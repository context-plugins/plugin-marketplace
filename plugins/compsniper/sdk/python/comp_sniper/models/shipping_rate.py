from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .eligibility import Eligibility, EligibilityDict
from .enums.price_source import PriceSourceOrStr
from .shipping_price import ShippingPrice, ShippingPriceDict


class ShippingRate(SdkBaseModel):
    carrier_code: str = Field(alias="carrierCode")
    service_name: str = Field(alias="serviceName")
    service_code: str = Field(alias="serviceCode")
    service_group: str | None = Field(alias="serviceGroup")
    tracking: bool
    estimated_delivery_min_hours: int | None = Field(alias="estimatedDeliveryMinHours")
    estimated_delivery_max_hours: int | None = Field(alias="estimatedDeliveryMaxHours")
    included_coverage: str | None = Field(alias="includedCoverage")
    fastest: bool
    """True when this applicable service has the shortest maximum delivery window. Ties are allowed."""

    discounted_price: ShippingPrice | None = Field(alias="discountedPrice")
    retail_price: ShippingPrice = Field(alias="retailPrice")
    effective_price: ShippingPrice = Field(alias="effectivePrice")
    price_source: PriceSourceOrStr = Field(alias="priceSource")
    savings_percent: int | None = Field(alias="savingsPercent")
    eligibility: Eligibility


class ShippingRateDict(TypedDict):
    carrier_code: str
    service_name: str
    service_code: str
    service_group: str | None
    tracking: bool
    estimated_delivery_min_hours: int | None
    estimated_delivery_max_hours: int | None
    included_coverage: str | None
    fastest: bool
    discounted_price: ShippingPriceDict | None
    retail_price: ShippingPriceDict
    effective_price: ShippingPriceDict
    price_source: PriceSourceOrStr
    savings_percent: int | None
    eligibility: EligibilityDict
