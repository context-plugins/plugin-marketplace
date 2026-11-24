from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_seat_based_prepaid_credits_billing_frequency import (
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_seat_based_prepaid_credits_billing_type import (
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType,
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput14(SdkBaseModel):
    """SeatBasedPrepaidCredits variant"""

    pricing_type: Literal["SeatBasedPrepaidCredits"] = Field(default="SeatBasedPrepaidCredits", alias="pricingType")
    """Discriminator value: SeatBasedPrepaidCredits"""

    credits_currency_id: str = Field(alias="creditsCurrencyId")
    credit_cost: float = Field(alias="creditCost")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    billing_frequency: PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr = Field(
        alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.ADVANCE, alias="billingType"
    )
    price_points: Optional[list[SimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class PricingInput14Dict(TypedDict):
    pricing_type: Literal["SeatBasedPrepaidCredits"]
    credits_currency_id: str
    credit_cost: float
    unit_value: NotRequired[float]
    billing_frequency: PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr]
    price_points: NotRequired[list[SimplePricePointDict]]
