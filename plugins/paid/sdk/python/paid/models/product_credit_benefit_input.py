from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.product_credit_benefit_input_allocation_cadence import (
    ProductCreditBenefitInputAllocationCadence,
    ProductCreditBenefitInputAllocationCadenceOrStr,
)
from .enums.product_credit_benefit_input_credit_grant_timing import ProductCreditBenefitInputCreditGrantTimingOrStr
from .enums.product_credit_benefit_input_recipient import (
    ProductCreditBenefitInputRecipient,
    ProductCreditBenefitInputRecipientOrStr,
)


class ProductCreditBenefitInput(SdkBaseModel):
    credits_currency_id: str = Field(alias="creditsCurrencyId")
    amount: float
    recipient: ProductCreditBenefitInputRecipientOrStr = ProductCreditBenefitInputRecipient.ORGANIZATION
    is_infinite_total: bool = Field(default=False, alias="isInfiniteTotal")
    allocation_cadence: ProductCreditBenefitInputAllocationCadenceOrStr = Field(
        default=ProductCreditBenefitInputAllocationCadence.UPFRONT, alias="allocationCadence"
    )
    credit_grant_timing: Optional[ProductCreditBenefitInputCreditGrantTimingOrStr] = Field(
        default=UNSET, alias="creditGrantTiming"
    )
    overage_unit_price: OptionalNullable[float] = Field(default=UNSET, alias="overageUnitPrice")
    rollover_amount: OptionalNullable[float] = Field(default=UNSET, alias="rolloverAmount")
    rollover_duration: OptionalNullable[float] = Field(default=UNSET, alias="rolloverDuration")
    rollover_duration_unit: OptionalNullable[str] = Field(default=UNSET, alias="rolloverDurationUnit")


class ProductCreditBenefitInputDict(TypedDict):
    credits_currency_id: str
    amount: float
    recipient: NotRequired[ProductCreditBenefitInputRecipientOrStr]
    is_infinite_total: NotRequired[bool]
    allocation_cadence: NotRequired[ProductCreditBenefitInputAllocationCadenceOrStr]
    credit_grant_timing: NotRequired[ProductCreditBenefitInputCreditGrantTimingOrStr]
    overage_unit_price: NotRequired[float | None]
    rollover_amount: NotRequired[float | None]
    rollover_duration: NotRequired[float | None]
    rollover_duration_unit: NotRequired[str | None]
