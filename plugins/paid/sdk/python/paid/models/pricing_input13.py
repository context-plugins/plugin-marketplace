from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_seat_based_volume_billing_frequency import (
    PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_seat_based_volume_billing_type import (
    PricingInputDiscriminatorMappingSeatBasedVolumeBillingType,
    PricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr,
)
from .tiered_price_point import TieredPricePoint, TieredPricePointDict


class PricingInput13(SdkBaseModel):
    """SeatBasedVolume variant"""

    pricing_type: Literal["SeatBasedVolume"] = Field(default="SeatBasedVolume", alias="pricingType")
    """Discriminator value: SeatBasedVolume"""

    billing_frequency: PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingSeatBasedVolumeBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[TieredPricePoint] = Field(alias="pricePoints")


class PricingInput13Dict(TypedDict):
    pricing_type: Literal["SeatBasedVolume"]
    billing_frequency: PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr]
    price_points: list[TieredPricePointDict]
