from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_recurring_per_unit_billing_frequency import (
    PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_recurring_per_unit_billing_type import (
    PricingInputDiscriminatorMappingRecurringPerUnitBillingType,
    PricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput(SdkBaseModel):
    """RecurringPerUnit variant"""

    pricing_type: Literal["RecurringPerUnit"] = Field(default="RecurringPerUnit", alias="pricingType")
    """Discriminator value: RecurringPerUnit"""

    billing_frequency: PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingRecurringPerUnitBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[SimplePricePoint] = Field(alias="pricePoints")


class PricingInputDict(TypedDict):
    pricing_type: Literal["RecurringPerUnit"]
    billing_frequency: PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr]
    price_points: list[SimplePricePointDict]
