from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_seat_based_per_unit_billing_frequency import (
    PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_seat_based_per_unit_billing_type import (
    PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType,
    PricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput11(SdkBaseModel):
    """SeatBasedPerUnit variant"""

    pricing_type: Literal["SeatBasedPerUnit"] = Field(default="SeatBasedPerUnit", alias="pricingType")
    """Discriminator value: SeatBasedPerUnit"""

    billing_frequency: PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[SimplePricePoint] = Field(alias="pricePoints")


class PricingInput11Dict(TypedDict):
    pricing_type: Literal["SeatBasedPerUnit"]
    billing_frequency: PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr]
    price_points: list[SimplePricePointDict]
