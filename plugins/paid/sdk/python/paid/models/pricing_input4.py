from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_usage_per_unit_billing_frequency import (
    PricingInputDiscriminatorMappingUsagePerUnitBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_per_unit_billing_type import (
    PricingInputDiscriminatorMappingUsagePerUnitBillingType,
    PricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_per_unit_signal_type import (
    PricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput4(SdkBaseModel):
    """UsagePerUnit variant"""

    pricing_type: Literal["UsagePerUnit"] = Field(default="UsagePerUnit", alias="pricingType")
    """Discriminator value: UsagePerUnit"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[PricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[PricingInputDiscriminatorMappingUsagePerUnitBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingUsagePerUnitBillingType.ARREARS, alias="billingType"
    )
    price_points: list[SimplePricePoint] = Field(alias="pricePoints")


class PricingInput4Dict(TypedDict):
    pricing_type: Literal["UsagePerUnit"]
    event_name: str
    signal_type: NotRequired[PricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr]
    billing_frequency: NotRequired[PricingInputDiscriminatorMappingUsagePerUnitBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr]
    price_points: list[SimplePricePointDict]
