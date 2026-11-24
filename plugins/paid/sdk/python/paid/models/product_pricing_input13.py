from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_seat_based_volume_billing_frequency import (
    ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_seat_based_volume_billing_type import (
    ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType,
    ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr,
)
from .product_tiered_price_point import ProductTieredPricePoint, ProductTieredPricePointDict


class ProductPricingInput13(SdkBaseModel):
    """SeatBasedVolume variant"""

    pricing_type: Literal["SeatBasedVolume"] = Field(default="SeatBasedVolume", alias="pricingType")
    """Discriminator value: SeatBasedVolume"""

    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductTieredPricePoint] = Field(alias="pricePoints")


class ProductPricingInput13Dict(TypedDict):
    pricing_type: Literal["SeatBasedVolume"]
    billing_frequency: ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr]
    price_points: list[ProductTieredPricePointDict]
