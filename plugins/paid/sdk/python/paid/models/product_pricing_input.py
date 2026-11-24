from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_recurring_per_unit_billing_frequency import (
    ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_recurring_per_unit_billing_type import (
    ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType,
    ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput(SdkBaseModel):
    """RecurringPerUnit variant"""

    pricing_type: Literal["RecurringPerUnit"] = Field(default="RecurringPerUnit", alias="pricingType")
    """Discriminator value: RecurringPerUnit"""

    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductSimplePricePoint] = Field(alias="pricePoints")


class ProductPricingInputDict(TypedDict):
    pricing_type: Literal["RecurringPerUnit"]
    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr]
    price_points: list[ProductSimplePricePointDict]
