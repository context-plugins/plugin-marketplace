from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_usage_per_unit_billing_frequency import (
    ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_per_unit_billing_type import (
    ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType,
    ProductPricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_per_unit_signal_type import (
    ProductPricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput4(SdkBaseModel):
    """UsagePerUnit variant"""

    pricing_type: Literal["UsagePerUnit"] = Field(default="UsagePerUnit", alias="pricingType")
    """Discriminator value: UsagePerUnit"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[ProductPricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType.ARREARS, alias="billingType"
    )
    price_points: list[ProductSimplePricePoint] = Field(alias="pricePoints")


class ProductPricingInput4Dict(TypedDict):
    pricing_type: Literal["UsagePerUnit"]
    event_name: str
    signal_type: NotRequired[ProductPricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr]
    billing_frequency: NotRequired[ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr]
    price_points: list[ProductSimplePricePointDict]
