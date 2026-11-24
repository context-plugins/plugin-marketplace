from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CreditGrant(SdkBaseModel):
    available: float
    used: float
    total: float
    rollover_amount: float | None = Field(alias="rolloverAmount")
    period_start: RFC3339DateTime = Field(alias="periodStart")
    period_end: RFC3339DateTime | None = Field(alias="periodEnd")
    rollover_end_date: RFC3339DateTime | None = Field(alias="rolloverEndDate")
    expires_at: RFC3339DateTime | None = Field(alias="expiresAt")
    is_in_rollover_window: bool = Field(alias="isInRolloverWindow")


class CreditGrantDict(TypedDict):
    available: float
    used: float
    total: float
    rollover_amount: float | None
    period_start: RFC3339DateTime
    period_end: RFC3339DateTime | None
    rollover_end_date: RFC3339DateTime | None
    expires_at: RFC3339DateTime | None
    is_in_rollover_window: bool
