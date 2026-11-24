from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.create_order_line_attribute_request_pricing_credit_benefits_items_allocation_cadence import (
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceOrStr,
)
from .enums.create_order_line_attribute_request_pricing_credit_benefits_items_credit_grant_timing import (
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTimingOrStr,
)
from .enums.create_order_line_attribute_request_pricing_credit_benefits_items_recipient import (
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipientOrStr,
)
from .enums.create_order_line_attribute_request_pricing_credit_benefits_items_rollover_duration_unit import (
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitOrStr,
)


class CreateOrderLineAttributeRequestPricingCreditBenefitsItems(SdkBaseModel):
    id: str
    credits_currency_id: Optional[str] = Field(default=UNSET, alias="creditsCurrencyId")
    recipient: Optional[CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipientOrStr] = UNSET
    amount: float
    rollover_amount: OptionalNullable[float] = Field(default=UNSET, alias="rolloverAmount")
    rollover_duration: OptionalNullable[float] = Field(default=UNSET, alias="rolloverDuration")
    rollover_duration_unit: Optional[
        CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitOrStr
    ] = Field(default=UNSET, alias="rolloverDurationUnit")
    allocation_cadence: Optional[
        CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceOrStr
    ] = Field(default=UNSET, alias="allocationCadence")
    credit_grant_timing: Optional[
        CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTimingOrStr
    ] = Field(default=UNSET, alias="creditGrantTiming")


class CreateOrderLineAttributeRequestPricingCreditBenefitsItemsDict(TypedDict):
    id: str
    credits_currency_id: NotRequired[str]
    recipient: NotRequired[CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipientOrStr]
    amount: float
    rollover_amount: NotRequired[float | None]
    rollover_duration: NotRequired[float | None]
    rollover_duration_unit: NotRequired[
        CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitOrStr
    ]
    allocation_cadence: NotRequired[CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceOrStr]
    credit_grant_timing: NotRequired[CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTimingOrStr]
