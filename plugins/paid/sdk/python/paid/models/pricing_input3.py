from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_recurring_percent_of_total_billing_frequency import (
    PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_recurring_percent_of_total_billing_type import (
    PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType,
    PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput3(SdkBaseModel):
    """RecurringPercentOfTotal variant"""

    pricing_type: Literal["RecurringPercentOfTotal"] = Field(default="RecurringPercentOfTotal", alias="pricingType")
    """Discriminator value: RecurringPercentOfTotal"""

    percentage_value: float = Field(alias="percentageValue")
    billing_frequency: PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.ADVANCE, alias="billingType"
    )
    price_points: Optional[list[SimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class PricingInput3Dict(TypedDict):
    pricing_type: Literal["RecurringPercentOfTotal"]
    percentage_value: float
    billing_frequency: PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr]
    price_points: NotRequired[list[SimplePricePointDict]]
