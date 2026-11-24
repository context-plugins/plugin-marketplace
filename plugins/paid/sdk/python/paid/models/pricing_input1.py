from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_recurring_graduated_billing_frequency import (
    PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_recurring_graduated_billing_type import (
    PricingInputDiscriminatorMappingRecurringGraduatedBillingType,
    PricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr,
)
from .tiered_price_point import TieredPricePoint, TieredPricePointDict


class PricingInput1(SdkBaseModel):
    """RecurringGraduated variant"""

    pricing_type: Literal["RecurringGraduated"] = Field(default="RecurringGraduated", alias="pricingType")
    """Discriminator value: RecurringGraduated"""

    billing_frequency: PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingRecurringGraduatedBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[TieredPricePoint] = Field(alias="pricePoints")


class PricingInput1Dict(TypedDict):
    pricing_type: Literal["RecurringGraduated"]
    billing_frequency: PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr]
    price_points: list[TieredPricePointDict]
