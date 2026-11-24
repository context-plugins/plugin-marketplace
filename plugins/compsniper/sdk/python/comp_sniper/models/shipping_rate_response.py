from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .shipping_rate import ShippingRate, ShippingRateDict


class ShippingRateResponse(SdkBaseModel):
    source: Literal["ebay_shipping_calculator"] = "ebay_shipping_calculator"
    rate_type: Literal["estimate"] = Field(default="estimate", alias="rateType")
    currency: str
    total_rates: int = Field(alias="totalRates")
    """Services currently applicable to the submitted package and content declarations."""

    total_conditional_rates: int = Field(alias="totalConditionalRates")
    """Additional services requiring specific carrier packaging or eligible contents."""

    fetched_at: RFC3339DateTime = Field(alias="fetchedAt")
    valid_until: RFC3339DateTime = Field(alias="validUntil")
    request_id: UUID = Field(alias="requestId")
    rates: list[ShippingRate]
    conditional_rates: list[ShippingRate] = Field(alias="conditionalRates")


class ShippingRateResponseDict(TypedDict):
    source: Literal["ebay_shipping_calculator"]
    rate_type: Literal["estimate"]
    currency: str
    total_rates: int
    total_conditional_rates: int
    fetched_at: RFC3339DateTime
    valid_until: RFC3339DateTime
    request_id: UUID
    rates: list[ShippingRateDict]
    conditional_rates: list[ShippingRateDict]
