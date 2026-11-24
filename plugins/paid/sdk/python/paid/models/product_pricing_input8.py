from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_billing_frequency import (
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_billing_type import (
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType,
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_signal_type import (
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr,
)
from .product_pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_credit_unit_brackets_items import (
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems,
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsDict,
)
from .product_pricing_input_discriminator_mapping_usage_bracketed_prepaid_credits_pricing_input import (
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput,
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputDict,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput8(SdkBaseModel):
    """UsageBracketedPrepaidCredits variant"""

    pricing_type: Literal["UsageBracketedPrepaidCredits"] = Field(
        default="UsageBracketedPrepaidCredits", alias="pricingType"
    )
    """Discriminator value: UsageBracketedPrepaidCredits"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    credits_currency_id: Optional[str] = Field(default=UNSET, alias="creditsCurrencyId")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    overage_unit_price: Optional[float] = Field(default=UNSET, alias="overageUnitPrice")
    credit_rollover_amount: Optional[float] = Field(default=UNSET, alias="creditRolloverAmount")
    pricing_input: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput = Field(
        alias="pricingInput"
    )
    credit_unit_brackets: list[
        ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems
    ] = Field(alias="creditUnitBrackets")
    billing_frequency: Optional[
        ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr
    ] = Field(default=UNSET, alias="billingFrequency")
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.ARREARS,
        alias="billingType",
    )
    price_points: Optional[list[ProductSimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class ProductPricingInput8Dict(TypedDict):
    pricing_type: Literal["UsageBracketedPrepaidCredits"]
    event_name: str
    signal_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr]
    credits_currency_id: NotRequired[str]
    unit_value: NotRequired[float]
    overage_unit_price: NotRequired[float]
    credit_rollover_amount: NotRequired[float]
    pricing_input: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputDict
    credit_unit_brackets: list[
        ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsDict
    ]
    billing_frequency: NotRequired[
        ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr
    ]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr]
    price_points: NotRequired[list[ProductSimplePricePointDict]]
