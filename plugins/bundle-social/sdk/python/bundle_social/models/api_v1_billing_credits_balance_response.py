from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ApiV1BillingCreditsBalanceResponse(SdkBaseModel):
    organization_id: str = Field(alias="organizationId")
    currency: Literal["usd"] = "usd"
    balance_micros: int = Field(alias="balanceMicros")
    held_micros: int = Field(alias="heldMicros")
    available_micros: int = Field(alias="availableMicros")
    balance_cents: int = Field(alias="balanceCents")
    available_cents: int = Field(alias="availableCents")
    low_balance_threshold_micros: int | None = Field(alias="lowBalanceThresholdMicros")
    low_balance: bool = Field(alias="lowBalance")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class ApiV1BillingCreditsBalanceResponseDict(TypedDict):
    organization_id: str
    currency: Literal["usd"]
    balance_micros: int
    held_micros: int
    available_micros: int
    balance_cents: int
    available_cents: int
    low_balance_threshold_micros: int | None
    low_balance: bool
    updated_at: RFC3339DateTime | None
