from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_usage_graduated_billing_frequency import (
    PricingInputDiscriminatorMappingUsageGraduatedBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_graduated_billing_type import (
    PricingInputDiscriminatorMappingUsageGraduatedBillingType,
    PricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_graduated_signal_type import (
    PricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr,
)
from .tiered_price_point import TieredPricePoint, TieredPricePointDict


class PricingInput5(SdkBaseModel):
    """UsageGraduated variant"""

    pricing_type: Literal["UsageGraduated"] = Field(default="UsageGraduated", alias="pricingType")
    """Discriminator value: UsageGraduated"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[PricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[PricingInputDiscriminatorMappingUsageGraduatedBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingUsageGraduatedBillingType.ARREARS, alias="billingType"
    )
    price_points: list[TieredPricePoint] = Field(alias="pricePoints")


class PricingInput5Dict(TypedDict):
    pricing_type: Literal["UsageGraduated"]
    event_name: str
    signal_type: NotRequired[PricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr]
    billing_frequency: NotRequired[PricingInputDiscriminatorMappingUsageGraduatedBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr]
    price_points: list[TieredPricePointDict]
