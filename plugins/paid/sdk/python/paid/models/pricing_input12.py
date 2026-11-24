from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_seat_based_graduated_billing_frequency import (
    PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_seat_based_graduated_billing_type import (
    PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType,
    PricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr,
)
from .tiered_price_point import TieredPricePoint, TieredPricePointDict


class PricingInput12(SdkBaseModel):
    """SeatBasedGraduated variant"""

    pricing_type: Literal["SeatBasedGraduated"] = Field(default="SeatBasedGraduated", alias="pricingType")
    """Discriminator value: SeatBasedGraduated"""

    billing_frequency: PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[TieredPricePoint] = Field(alias="pricePoints")


class PricingInput12Dict(TypedDict):
    pricing_type: Literal["SeatBasedGraduated"]
    billing_frequency: PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr]
    price_points: list[TieredPricePointDict]
