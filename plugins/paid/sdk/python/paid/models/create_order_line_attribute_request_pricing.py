from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_order_line_attribute_request_pricing_credit_benefits_items import (
    CreateOrderLineAttributeRequestPricingCreditBenefitsItems,
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsDict,
)
from .create_order_line_attribute_request_pricing_credit_unit_brackets_items import (
    CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems,
    CreateOrderLineAttributeRequestPricingCreditUnitBracketsItemsDict,
)
from .create_order_line_attribute_request_pricing_price_points import (
    CreateOrderLineAttributeRequestPricingPricePoints,
    CreateOrderLineAttributeRequestPricingPricePointsDict,
)
from .create_order_line_attribute_request_pricing_pricing_input import (
    CreateOrderLineAttributeRequestPricingPricingInput,
    CreateOrderLineAttributeRequestPricingPricingInputDict,
)
from .enums.create_order_line_attribute_request_pricing_billing_frequency import (
    CreateOrderLineAttributeRequestPricingBillingFrequencyOrStr,
)
from .enums.create_order_line_attribute_request_pricing_billing_type import (
    CreateOrderLineAttributeRequestPricingBillingTypeOrStr,
)
from .enums.create_order_line_attribute_request_pricing_charge_type import (
    CreateOrderLineAttributeRequestPricingChargeTypeOrStr,
)
from .enums.create_order_line_attribute_request_pricing_pricing_model import (
    CreateOrderLineAttributeRequestPricingPricingModelOrStr,
)
from .enums.create_order_line_attribute_request_pricing_signal_type import (
    CreateOrderLineAttributeRequestPricingSignalTypeOrStr,
)


class CreateOrderLineAttributeRequestPricing(SdkBaseModel):
    event_name: Optional[str] = Field(default=UNSET, alias="eventName")
    charge_type: CreateOrderLineAttributeRequestPricingChargeTypeOrStr = Field(alias="chargeType")
    price_points: CreateOrderLineAttributeRequestPricingPricePoints = Field(alias="pricePoints")
    """Single flat price point for this order attribute override. Do not send a currency-keyed map here."""

    pricing_model: CreateOrderLineAttributeRequestPricingPricingModelOrStr = Field(alias="pricingModel")
    billing_frequency: Optional[CreateOrderLineAttributeRequestPricingBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: Optional[CreateOrderLineAttributeRequestPricingBillingTypeOrStr] = Field(
        default=UNSET, alias="billingType"
    )
    signal_type: Optional[CreateOrderLineAttributeRequestPricingSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    credits_currency_id: Optional[str] = Field(default=UNSET, alias="creditsCurrencyId")
    credit_cost: Optional[float] = Field(default=UNSET, alias="creditCost")
    overage_unit_price: Optional[float] = Field(default=UNSET, alias="overageUnitPrice")
    credit_rollover_amount: Optional[float] = Field(default=UNSET, alias="creditRolloverAmount")
    credit_benefits: Optional[list[CreateOrderLineAttributeRequestPricingCreditBenefitsItems]] = Field(
        default=UNSET, alias="creditBenefits"
    )
    pricing_input: Optional[CreateOrderLineAttributeRequestPricingPricingInput] = Field(
        default=UNSET, alias="pricingInput"
    )
    credit_unit_brackets: Optional[list[CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems]] = Field(
        default=UNSET, alias="creditUnitBrackets"
    )


class CreateOrderLineAttributeRequestPricingDict(TypedDict):
    event_name: NotRequired[str]
    charge_type: CreateOrderLineAttributeRequestPricingChargeTypeOrStr
    price_points: CreateOrderLineAttributeRequestPricingPricePointsDict
    pricing_model: CreateOrderLineAttributeRequestPricingPricingModelOrStr
    billing_frequency: NotRequired[CreateOrderLineAttributeRequestPricingBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[CreateOrderLineAttributeRequestPricingBillingTypeOrStr]
    signal_type: NotRequired[CreateOrderLineAttributeRequestPricingSignalTypeOrStr]
    credits_currency_id: NotRequired[str]
    credit_cost: NotRequired[float]
    overage_unit_price: NotRequired[float]
    credit_rollover_amount: NotRequired[float]
    credit_benefits: NotRequired[list[CreateOrderLineAttributeRequestPricingCreditBenefitsItemsDict]]
    pricing_input: NotRequired[CreateOrderLineAttributeRequestPricingPricingInputDict]
    credit_unit_brackets: NotRequired[list[CreateOrderLineAttributeRequestPricingCreditUnitBracketsItemsDict]]
