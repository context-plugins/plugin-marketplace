from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .line import Line, LineDict


class ApiV1BillingBillableUsageQuoteResponse(SdkBaseModel):
    billable: bool
    lines: list[Line]
    total_micros: int = Field(alias="totalMicros")
    total_cents: int = Field(alias="totalCents")
    currency: Literal["usd"] = "usd"
    available_micros: int = Field(alias="availableMicros")
    available_cents: int = Field(alias="availableCents")
    would_exceed_balance: bool = Field(alias="wouldExceedBalance")


class ApiV1BillingBillableUsageQuoteResponseDict(TypedDict):
    billable: bool
    lines: list[LineDict]
    total_micros: int
    total_cents: int
    currency: Literal["usd"]
    available_micros: int
    available_cents: int
    would_exceed_balance: bool
