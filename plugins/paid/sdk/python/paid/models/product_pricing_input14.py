from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_seat_based_prepaid_credits_billing_frequency import (
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_seat_based_prepaid_credits_billing_type import (
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType,
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput14(SdkBaseModel):
    """SeatBasedPrepaidCredits variant"""

    pricing_type: Literal["SeatBasedPrepaidCredits"] = Field(default="SeatBasedPrepaidCredits", alias="pricingType")
    """Discriminator value: SeatBasedPrepaidCredits"""

    credits_currency_id: str = Field(alias="creditsCurrencyId")
    credit_cost: float = Field(alias="creditCost")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.ADVANCE, alias="billingType"
    )
    price_points: Optional[list[ProductSimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class ProductPricingInput14Dict(TypedDict):
    pricing_type: Literal["SeatBasedPrepaidCredits"]
    credits_currency_id: str
    credit_cost: float
    unit_value: NotRequired[float]
    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr]
    price_points: NotRequired[list[ProductSimplePricePointDict]]
