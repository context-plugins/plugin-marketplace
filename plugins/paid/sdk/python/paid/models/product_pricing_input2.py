from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_recurring_volume_billing_frequency import (
    ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_recurring_volume_billing_type import (
    ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType,
    ProductPricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr,
)
from .product_tiered_price_point import ProductTieredPricePoint, ProductTieredPricePointDict


class ProductPricingInput2(SdkBaseModel):
    """RecurringVolume variant"""

    pricing_type: Literal["RecurringVolume"] = Field(default="RecurringVolume", alias="pricingType")
    """Discriminator value: RecurringVolume"""

    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductTieredPricePoint] = Field(alias="pricePoints")


class ProductPricingInput2Dict(TypedDict):
    pricing_type: Literal["RecurringVolume"]
    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr]
    price_points: list[ProductTieredPricePointDict]
