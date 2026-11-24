from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_usage_prepaid_credits_billing_frequency import (
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_prepaid_credits_billing_type import (
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType,
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_prepaid_credits_signal_type import (
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput7(SdkBaseModel):
    """UsagePrepaidCredits variant"""

    pricing_type: Literal["UsagePrepaidCredits"] = Field(default="UsagePrepaidCredits", alias="pricingType")
    """Discriminator value: UsagePrepaidCredits"""

    event_name: str = Field(alias="eventName")
    signal_type: Optional[ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    credits_currency_id: str = Field(alias="creditsCurrencyId")
    credit_cost: float = Field(alias="creditCost")
    unit_value: Optional[float] = Field(default=UNSET, alias="unitValue")
    billing_frequency: Optional[
        ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencyOrStr
    ] = Field(default=UNSET, alias="billingFrequency")
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.ARREARS, alias="billingType"
    )
    price_points: Optional[list[ProductSimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class ProductPricingInput7Dict(TypedDict):
    pricing_type: Literal["UsagePrepaidCredits"]
    event_name: str
    signal_type: NotRequired[ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr]
    credits_currency_id: str
    credit_cost: float
    unit_value: NotRequired[float]
    billing_frequency: NotRequired[ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr]
    price_points: NotRequired[list[ProductSimplePricePointDict]]
