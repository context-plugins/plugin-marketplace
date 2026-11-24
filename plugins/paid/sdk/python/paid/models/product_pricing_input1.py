from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_recurring_graduated_billing_frequency import (
    ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_recurring_graduated_billing_type import (
    ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType,
    ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr,
)
from .product_tiered_price_point import ProductTieredPricePoint, ProductTieredPricePointDict


class ProductPricingInput1(SdkBaseModel):
    """RecurringGraduated variant"""

    pricing_type: Literal["RecurringGraduated"] = Field(default="RecurringGraduated", alias="pricingType")
    """Discriminator value: RecurringGraduated"""

    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductTieredPricePoint] = Field(alias="pricePoints")


class ProductPricingInput1Dict(TypedDict):
    pricing_type: Literal["RecurringGraduated"]
    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr]
    price_points: list[ProductTieredPricePointDict]
