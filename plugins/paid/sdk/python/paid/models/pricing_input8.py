from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_billing_frequency import (
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_billing_type import (
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType,
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_signal_type import (
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr,
)
from .pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_credit_unit_brackets_items import (
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems,
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsDict,
)
from .pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_pricing_input import (
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput,
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputDict,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput8(SdkBaseModel):
    """UsageBracketedPrepaidCredits variant"""

    pricing_type: Literal["UsageBracketedPrepaidCredits"] = Field(
        default="UsageBracketedPrepaidCredits", alias="pricingType"
    )
    """Discriminator value: UsageBracketedPrepaidCredits"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    credits_currency_id: Optional[str] = Field(default=UNSET, alias="creditsCurrencyId")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    overage_unit_price: Optional[float] = Field(default=UNSET, alias="overageUnitPrice")
    credit_rollover_amount: Optional[float] = Field(default=UNSET, alias="creditRolloverAmount")
    pricing_input: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput = Field(
        alias="pricingInput"
    )
    credit_unit_brackets: list[
        PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems
    ] = Field(alias="creditUnitBrackets")
    billing_frequency: Optional[
        PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr
    ] = Field(default=UNSET, alias="billingFrequency")
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.ARREARS, alias="billingType"
    )
    price_points: Optional[list[SimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class PricingInput8Dict(TypedDict):
    pricing_type: Literal["UsageBracketedPrepaidCredits"]
    event_name: str
    signal_type: NotRequired[PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr]
    credits_currency_id: NotRequired[str]
    unit_value: NotRequired[float]
    overage_unit_price: NotRequired[float]
    credit_rollover_amount: NotRequired[float]
    pricing_input: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputDict
    credit_unit_brackets: list[PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsDict]
    billing_frequency: NotRequired[PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr]
    price_points: NotRequired[list[SimplePricePointDict]]
