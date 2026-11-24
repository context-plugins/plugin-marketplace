from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_usage_volume_billing_frequency import (
    PricingInputDiscriminatorMappingUsageVolumeBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_volume_billing_type import (
    PricingInputDiscriminatorMappingUsageVolumeBillingType,
    PricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_volume_signal_type import (
    PricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr,
)
from .tiered_price_point import TieredPricePoint, TieredPricePointDict


class PricingInput6(SdkBaseModel):
    """UsageVolume variant"""

    pricing_type: Literal["UsageVolume"] = Field(default="UsageVolume", alias="pricingType")
    """Discriminator value: UsageVolume"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[PricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[PricingInputDiscriminatorMappingUsageVolumeBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingUsageVolumeBillingType.ARREARS, alias="billingType"
    )
    price_points: list[TieredPricePoint] = Field(alias="pricePoints")


class PricingInput6Dict(TypedDict):
    pricing_type: Literal["UsageVolume"]
    event_name: str
    signal_type: NotRequired[PricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr]
    billing_frequency: NotRequired[PricingInputDiscriminatorMappingUsageVolumeBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr]
    price_points: list[TieredPricePointDict]
