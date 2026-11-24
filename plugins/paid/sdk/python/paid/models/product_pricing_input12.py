from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_seat_based_graduated_billing_frequency import (
    ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_seat_based_graduated_billing_type import (
    ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType,
    ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr,
)
from .product_tiered_price_point import ProductTieredPricePoint, ProductTieredPricePointDict


class ProductPricingInput12(SdkBaseModel):
    """SeatBasedGraduated variant"""

    pricing_type: Literal["SeatBasedGraduated"] = Field(default="SeatBasedGraduated", alias="pricingType")
    """Discriminator value: SeatBasedGraduated"""

    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductTieredPricePoint] = Field(alias="pricePoints")


class ProductPricingInput12Dict(TypedDict):
    pricing_type: Literal["SeatBasedGraduated"]
    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr]
    price_points: list[ProductTieredPricePointDict]
