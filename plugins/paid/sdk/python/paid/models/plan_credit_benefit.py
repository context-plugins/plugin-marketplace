from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.plan_credit_benefit_allocation_cadence import PlanCreditBenefitAllocationCadenceOrStr
from .enums.plan_credit_benefit_credit_grant_timing import PlanCreditBenefitCreditGrantTimingOrStr
from .enums.plan_credit_benefit_recipient import PlanCreditBenefitRecipientOrStr
from .enums.plan_credit_benefit_rollover_duration_unit import PlanCreditBenefitRolloverDurationUnitOrStr


class PlanCreditBenefit(SdkBaseModel):
    id: str
    credits_currency_id: Optional[str] = Field(default=UNSET, alias="creditsCurrencyId")
    recipient: Optional[PlanCreditBenefitRecipientOrStr] = UNSET
    amount: float
    rollover_amount: OptionalNullable[float] = Field(default=UNSET, alias="rolloverAmount")
    rollover_duration: OptionalNullable[float] = Field(default=UNSET, alias="rolloverDuration")
    rollover_duration_unit: Optional[PlanCreditBenefitRolloverDurationUnitOrStr] = Field(
        default=UNSET, alias="rolloverDurationUnit"
    )
    allocation_cadence: Optional[PlanCreditBenefitAllocationCadenceOrStr] = Field(
        default=UNSET, alias="allocationCadence"
    )
    credit_grant_timing: Optional[PlanCreditBenefitCreditGrantTimingOrStr] = Field(
        default=UNSET, alias="creditGrantTiming"
    )
    is_infinite_total: Optional[bool] = Field(default=UNSET, alias="isInfiniteTotal")


class PlanCreditBenefitDict(TypedDict):
    id: str
    credits_currency_id: NotRequired[str]
    recipient: NotRequired[PlanCreditBenefitRecipientOrStr]
    amount: float
    rollover_amount: NotRequired[float | None]
    rollover_duration: NotRequired[float | None]
    rollover_duration_unit: NotRequired[PlanCreditBenefitRolloverDurationUnitOrStr]
    allocation_cadence: NotRequired[PlanCreditBenefitAllocationCadenceOrStr]
    credit_grant_timing: NotRequired[PlanCreditBenefitCreditGrantTimingOrStr]
    is_infinite_total: NotRequired[bool]
