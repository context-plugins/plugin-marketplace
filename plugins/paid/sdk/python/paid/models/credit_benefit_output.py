from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CreditBenefitOutput(SdkBaseModel):
    id: str
    credits_currency_id: str | None = Field(alias="creditsCurrencyId")
    amount: float
    recipient: str
    is_infinite_total: bool = Field(alias="isInfiniteTotal")
    allocation_cadence: str = Field(alias="allocationCadence")
    credit_grant_timing: OptionalNullable[str] = Field(default=UNSET, alias="creditGrantTiming")
    overage_unit_price: OptionalNullable[float] = Field(default=UNSET, alias="overageUnitPrice")
    rollover_amount: OptionalNullable[float] = Field(default=UNSET, alias="rolloverAmount")
    rollover_duration: OptionalNullable[float] = Field(default=UNSET, alias="rolloverDuration")
    rollover_duration_unit: OptionalNullable[str] = Field(default=UNSET, alias="rolloverDurationUnit")


class CreditBenefitOutputDict(TypedDict):
    id: str
    credits_currency_id: str | None
    amount: float
    recipient: str
    is_infinite_total: bool
    allocation_cadence: str
    credit_grant_timing: NotRequired[str | None]
    overage_unit_price: NotRequired[float | None]
    rollover_amount: NotRequired[float | None]
    rollover_duration: NotRequired[float | None]
    rollover_duration_unit: NotRequired[str | None]
