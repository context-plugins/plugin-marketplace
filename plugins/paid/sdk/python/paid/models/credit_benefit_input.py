from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.credit_benefit_input_allocation_cadence import (
    CreditBenefitInputAllocationCadence,
    CreditBenefitInputAllocationCadenceOrStr,
)
from .enums.credit_benefit_input_credit_grant_timing import CreditBenefitInputCreditGrantTimingOrStr
from .enums.credit_benefit_input_recipient import CreditBenefitInputRecipient, CreditBenefitInputRecipientOrStr


class CreditBenefitInput(SdkBaseModel):
    credits_currency_id: str = Field(alias="creditsCurrencyId")
    amount: float
    recipient: CreditBenefitInputRecipientOrStr = CreditBenefitInputRecipient.ORGANIZATION
    is_infinite_total: bool = Field(default=False, alias="isInfiniteTotal")
    allocation_cadence: CreditBenefitInputAllocationCadenceOrStr = Field(
        default=CreditBenefitInputAllocationCadence.UPFRONT, alias="allocationCadence"
    )
    credit_grant_timing: Optional[CreditBenefitInputCreditGrantTimingOrStr] = Field(
        default=UNSET, alias="creditGrantTiming"
    )
    overage_unit_price: OptionalNullable[float] = Field(default=UNSET, alias="overageUnitPrice")
    rollover_amount: OptionalNullable[float] = Field(default=UNSET, alias="rolloverAmount")
    rollover_duration: OptionalNullable[float] = Field(default=UNSET, alias="rolloverDuration")
    rollover_duration_unit: OptionalNullable[str] = Field(default=UNSET, alias="rolloverDurationUnit")


class CreditBenefitInputDict(TypedDict):
    credits_currency_id: str
    amount: float
    recipient: NotRequired[CreditBenefitInputRecipientOrStr]
    is_infinite_total: NotRequired[bool]
    allocation_cadence: NotRequired[CreditBenefitInputAllocationCadenceOrStr]
    credit_grant_timing: NotRequired[CreditBenefitInputCreditGrantTimingOrStr]
    overage_unit_price: NotRequired[float | None]
    rollover_amount: NotRequired[float | None]
    rollover_duration: NotRequired[float | None]
    rollover_duration_unit: NotRequired[str | None]
