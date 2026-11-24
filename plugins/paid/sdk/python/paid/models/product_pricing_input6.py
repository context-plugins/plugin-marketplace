from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_usage_volume_billing_frequency import (
    ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_volume_billing_type import (
    ProductPricingInputDiscriminatorMappingUsageVolumeBillingType,
    ProductPricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_volume_signal_type import (
    ProductPricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr,
)
from .product_tiered_price_point import ProductTieredPricePoint, ProductTieredPricePointDict


class ProductPricingInput6(SdkBaseModel):
    """UsageVolume variant"""

    pricing_type: Literal["UsageVolume"] = Field(default="UsageVolume", alias="pricingType")
    """Discriminator value: UsageVolume"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[ProductPricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingUsageVolumeBillingType.ARREARS, alias="billingType"
    )
    price_points: list[ProductTieredPricePoint] = Field(alias="pricePoints")


class ProductPricingInput6Dict(TypedDict):
    pricing_type: Literal["UsageVolume"]
    event_name: str
    signal_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr]
    billing_frequency: NotRequired[ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr]
    price_points: list[ProductTieredPricePointDict]
