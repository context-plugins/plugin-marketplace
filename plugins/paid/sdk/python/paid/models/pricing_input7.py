from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_usage_prepaid_credits_billing_frequency import (
    PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_prepaid_credits_billing_type import (
    PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType,
    PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_prepaid_credits_signal_type import (
    PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput7(SdkBaseModel):
    """UsagePrepaidCredits variant"""

    pricing_type: Literal["UsagePrepaidCredits"] = Field(default="UsagePrepaidCredits", alias="pricingType")
    """Discriminator value: UsagePrepaidCredits"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    credits_currency_id: str = Field(alias="creditsCurrencyId")
    credit_cost: float = Field(alias="creditCost")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    billing_frequency: Optional[PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.ARREARS, alias="billingType"
    )
    price_points: Optional[list[SimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class PricingInput7Dict(TypedDict):
    pricing_type: Literal["UsagePrepaidCredits"]
    event_name: str
    signal_type: NotRequired[PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr]
    credits_currency_id: str
    credit_cost: float
    unit_value: NotRequired[float]
    billing_frequency: NotRequired[PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr]
    price_points: NotRequired[list[SimplePricePointDict]]
