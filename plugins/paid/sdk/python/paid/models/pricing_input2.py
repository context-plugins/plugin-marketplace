from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_recurring_volume_billing_frequency import (
    PricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_recurring_volume_billing_type import (
    PricingInputDiscriminatorMappingRecurringVolumeBillingType,
    PricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr,
)
from .tiered_price_point import TieredPricePoint, TieredPricePointDict


class PricingInput2(SdkBaseModel):
    """RecurringVolume variant"""

    pricing_type: Literal["RecurringVolume"] = Field(default="RecurringVolume", alias="pricingType")
    """Discriminator value: RecurringVolume"""

    billing_frequency: PricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingRecurringVolumeBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[TieredPricePoint] = Field(alias="pricePoints")


class PricingInput2Dict(TypedDict):
    pricing_type: Literal["RecurringVolume"]
    billing_frequency: PricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr]
    price_points: list[TieredPricePointDict]
