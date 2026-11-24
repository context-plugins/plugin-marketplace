from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_usage_graduated_billing_frequency import (
    ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_graduated_billing_type import (
    ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType,
    ProductPricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_graduated_signal_type import (
    ProductPricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr,
)
from .product_tiered_price_point import ProductTieredPricePoint, ProductTieredPricePointDict


class ProductPricingInput5(SdkBaseModel):
    """UsageGraduated variant"""

    pricing_type: Literal["UsageGraduated"] = Field(default="UsageGraduated", alias="pricingType")
    """Discriminator value: UsageGraduated"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[ProductPricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType.ARREARS, alias="billingType"
    )
    price_points: list[ProductTieredPricePoint] = Field(alias="pricePoints")


class ProductPricingInput5Dict(TypedDict):
    pricing_type: Literal["UsageGraduated"]
    event_name: str
    signal_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr]
    billing_frequency: NotRequired[ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr]
    price_points: list[ProductTieredPricePointDict]
