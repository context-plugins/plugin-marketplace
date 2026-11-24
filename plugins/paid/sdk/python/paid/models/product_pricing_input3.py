from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_recurring_percent_of_total_billing_frequency import (
    ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_recurring_percent_of_total_billing_type import (
    ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType,
    ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput3(SdkBaseModel):
    """RecurringPercentOfTotal variant"""

    pricing_type: Literal["RecurringPercentOfTotal"] = Field(default="RecurringPercentOfTotal", alias="pricingType")
    """Discriminator value: RecurringPercentOfTotal"""

    percentage_value: float = Field(alias="percentageValue")
    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.ADVANCE, alias="billingType"
    )
    price_points: Optional[list[ProductSimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class ProductPricingInput3Dict(TypedDict):
    pricing_type: Literal["RecurringPercentOfTotal"]
    percentage_value: float
    billing_frequency: ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr]
    price_points: NotRequired[list[ProductSimplePricePointDict]]
