from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_seat_based_per_unit_billing_frequency import (
    ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_seat_based_per_unit_billing_type import (
    ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType,
    ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput11(SdkBaseModel):
    """SeatBasedPerUnit variant"""

    pricing_type: Literal["SeatBasedPerUnit"] = Field(default="SeatBasedPerUnit", alias="pricingType")
    """Discriminator value: SeatBasedPerUnit"""

    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductSimplePricePoint] = Field(alias="pricePoints")


class ProductPricingInput11Dict(TypedDict):
    pricing_type: Literal["SeatBasedPerUnit"]
    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr]
    price_points: list[ProductSimplePricePointDict]
